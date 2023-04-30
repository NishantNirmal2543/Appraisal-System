
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token);
        const response = await axios.get("http://localhost:8080/validuser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployee(response.data.employee);
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchEmployee();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard">
        {error && <div className="error">{error}</div>}
        {isLoading ? (
          <div className="container">
          <div className="card ">
            <div className="card-img skeleton"></div>
            <div className="card-body">
              <h2 className="card-title skeleton"></h2>
              <p className="card-intro skeleton"></p>
            </div>
          </div>
          </div>
        ) : (
         
          <div className="container">
          <div className="section">
            <p>Name: {employee.name}</p>
            <p>College: {employee.college}</p>
            <p>Designation: {employee.designation}</p>
            <p>Mobile: {employee.mobile}</p>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
          </div>
          </div>
        
        )}
      </div>
    </>
  );
};

export default Dashboard;
