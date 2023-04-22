import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Dashboard.css"

const Dashboard = () => {
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/fetchemployeedashboard', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setEmployee(response.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchEmployee();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {error && <div className="error">{error}</div>}
      {employee && (
        <div>
          <p>Name: {employee.name}</p>
          <p>Email: {employee.email}</p>
          <p>Department: {employee.department}</p>
          <p>Role: {employee.role}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
