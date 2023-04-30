
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const token = localStorage.getItem('token');
        // console.log(token);
        const response = await axios.get("http://localhost:8080/validadmin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdmin(response.data.admin);
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchAdmin();
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
            <p>Name: {admin.name}</p>
            <p>College: {admin.college}</p>
            <p>Role: {admin.role}</p>
            <p>Mobile: {admin.mobile}</p>
            <p>Email: {admin.email}</p>
            <p>Department: {admin.department}</p>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
