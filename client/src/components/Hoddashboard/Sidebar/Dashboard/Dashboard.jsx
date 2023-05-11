
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard2.css";
import profilePhoto from "../Dashboard/download.jpeg"
import coverPhoto from "../Dashboard/images.jpeg"

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
        console.log(response.data.admin)
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchAdmin();
  }, []);

  return (
    <>
     
     <div className="dashboard">
      {error && <div className="error">{error}</div>}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="container2">
          <div className="profile">
            <div className="cover-photo">
              <img src={coverPhoto} alt="Cover" />
            </div>
            <div className="profile-details">
              <div className="profile-photo">
                <img src={profilePhoto} alt="Profile" />
              </div>
              <h1>{admin.name}</h1>
              <h3>{admin.role}</h3>

             
              <hr />
              <div className="info">
                <div className="info-item">
                  <h4>College</h4>
                  <p>{admin.college}</p>
                </div>
                <div className="info-item">
                  <h4>Department</h4>
                  <p>{admin.department}</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>{admin.email}</p>
                </div>
                <div className="info-item">
                  <h4>Mobile</h4>
                  <p>{admin.mobile}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Dashboard;
