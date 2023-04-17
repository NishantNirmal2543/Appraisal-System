import React, { useState, useEffect } from 'react';
import './Dashboard.css';
const Dashboard = () => {
  const [departments, setDepartments] = useState([]);
  const [hods, setHods] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // fetch data from database and update state
    const fetchDashboardData = async () => {
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      setDepartments(data.departments);
      setHods(data.hods);
      setEmployees(data.employees);
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
