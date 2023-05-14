

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AppraisalEmp.css"
import { AiOutlineEye } from "react-icons/ai";


const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [appraisals, setAppraisals] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/validadmin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const admin = response.data.admin;
        const department = admin.department;
        const college = admin.college;

        const employeesResponse = await axios.get('http://localhost:8080/api/fetchappraisalhod', {
          params: {
            department,
            college,
          },
        });

        setEmployees(employeesResponse.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleViewDetails = async (employee) => {
    setSelectedEmployee(employee);

    try {
      // console.log(employee._id)
      const appraisalResponse = await axios.get(`http://localhost:8080/api/hodfetchappraisal/${employee._id}`);
      // console.log(appraisalResponse)
      const filter = appraisalResponse.data.appraisals.find((data) => data.year === 2024)
      setAppraisals(filter);
      // console.log(appraisalResponse.data.appraisals)

    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleGoBack = () => {
    setSelectedEmployee(null);
  };
  return (
    <div >
      {error && <div className="error">{error}</div>}

      {!selectedEmployee ? (
        <>
          {isLoading ? (
            <div className="loader-container">
              <div className="loaderEmp"></div>
            </div>
          ) : (
            <>
              <h1>Employee Appraisals</h1>
              <div className='cardEmp'>

                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => (
                      <tr key={employee._id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>
                          <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewDetails(employee)} >  <AiOutlineEye /> </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      ) : (

        <div className="containerEmpl">
          <div className="profile">
            <div className="cover-photo">
              {/* <img src={coverPhoto} alt="Cover" /> */}
            </div>
            <div className="profile-details">
              <div className="profile-photo">
                {/* <img src={profilePhoto} alt="Profile" /> */}
              </div>
              <h1>{selectedEmployee.name}</h1>
              <h3>{selectedEmployee.designation}</h3>
              <hr />
              <div className="info">
                <div className="info-item">
                  <h4>College</h4>
                  <p>{selectedEmployee.college}</p>
                </div>
                <div className="info-item">
                  <h4>Department</h4>
                  <p>{selectedEmployee.department}</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>{selectedEmployee.email}</p>
                </div>
                <div className="info-item">
                  <h4>Mobile</h4>
                  <p>{selectedEmployee.mobile}</p>
                </div>
              </div>
            </div>
            <button className='btnZ' onClick={handleGoBack}>Go Back</button>

            <div className="appraisal-details">
              <h2>Appraisal Details</h2>
              {appraisals ? (
                <div className="appraisal-details">
                  <h3>Appraisal Details</h3>
                  <div className="info-item">
                    <h4>Employee ID</h4>
                    <p>{appraisals.employeeid}</p>
                  </div>
                  <div className="info-item">
                    <h4>Appraisal Date</h4>
                    <p>{appraisals.year}</p>
                  </div>
                  <div className="info-item">
                    <h4>Appraisal classesTaught</h4>
                    <p>{appraisals.classesTaught}</p>
                  </div>

                </div>
              ) : (
                <div className="appraisal-details">
                  <p>No appraisal details available for this employee.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default EmployeeTable;
