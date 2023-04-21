import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [hods, setHods] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [principles, setprinciples] = useState([]);


  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchemployee');
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);


  const fetchHods = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchhod');
      setHods(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchHods();
  }, []);

  const fetchprinciples = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchprinciple');
      setprinciples(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchprinciples();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <div className="dashboard-header">Departments</div>
        <ul className="dashboard-list">
          {[...new Set(hods.map((hod) => hod.department))].map((department) => (
            <li key={department}>{department}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <div className="dashboard-header">HODs</div>
        <ul className="dashboard-list">
          {hods.map((hod) => (
            <li key={hod.id}>{hod.name} ({hod.department})</li>
          ))}
        </ul>
      </div>
      {/* <div className="dashboard-section">
        <div className="dashboard-header">Employees</div>
        <ul className="dashboard-list">
          <li>{employees.length} </li>
        </ul>
      </div> */}
      <div className="dashboard-section">
        <div className="dashboard-header">Employees</div>
        <ul className="dashboard-list">
          <li>Total Employees: {employees.length}</li>
          {Array.from(new Set(employees.map((employee) => employee.department))).map((department) => (
            <li key={department}>{department}: {employees.filter((employee) => employee.department === department).length}</li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-header">Colleges</div>
        <ul className="dashboard-list">
          {hods
            .filter((hod, index, self) => self.findIndex((h) => h.college === hod.college) === index)
            .map((hod) => (
              <li key={hod.college}>{hod.college}</li>
            ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-header">Principles</div>
        <ul className="dashboard-list">
          {principles.map((principle) => (
            <li key={principle.id}>{principle.name} ({principle.college}) </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

