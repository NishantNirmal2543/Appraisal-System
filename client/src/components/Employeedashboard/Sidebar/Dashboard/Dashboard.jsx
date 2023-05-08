

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard1.css";
import profilePhoto from "../Dashboard/1630354322427.jpeg"
import coverPhoto from "../Dashboard/images.jpeg"

const Dashboard = () => {
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const token = localStorage.getItem('token');
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
    <div className="dashboard">
      {error && <div className="error">{error}</div>}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="container1">
          <div className="profile">
            <div className="cover-photo">
              <img src={coverPhoto} alt="Cover" />
            </div>
            <div className="profile-details">
              <div className="profile-photo">
                <img src={profilePhoto} alt="Profile" />
              </div>
              <h1>{employee.name}</h1>
              <h3>{employee.designation}</h3>
              <hr />
              <div className="info">
                <div className="info-item">
                  <h4>College</h4>
                  <p>{employee.college}</p>
                </div>
                <div className="info-item">
                  <h4>Department</h4>
                  <p>{employee.department}</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>{employee.email}</p>
                </div>
                <div className="info-item">
                  <h4>Mobile</h4>
                  <p>{employee.mobile}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


