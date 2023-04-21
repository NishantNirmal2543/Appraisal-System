import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [departments, setDepartments] = useState([]);
  const [hods, setHods] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('/api/fetch');
        const data = response.data;
        setDepartments(data.departments);
        setHods(data.hods);
        setEmployees(data.employees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <div className="dashboard-header">Departments</div>
        <ul className="dashboard-list">
          {departments.map((department) => (
            <li key={department.id}>{department.name}</li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-header">HODs</div>
        <ul className="dashboard-list">
          {hods.map((hod) => (
            <li key={hod.id}>{hod.name}</li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-header">Employees</div>
        <ul className="dashboard-list">
          {employees.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

