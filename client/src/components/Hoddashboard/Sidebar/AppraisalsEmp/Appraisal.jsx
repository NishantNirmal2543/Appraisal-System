


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AppraisalEmp.css"

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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


  return (
    
    <div className='cardEmp'>
            {error && <div className="error">{error}</div>}
       {isLoading ? (
        <div className="loaderEmp"></div>
      ) : (
 <table>
      <thead>
        <tr>
          <th>Name</th>
         
          <th>Email</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
           
            <td>{employee.email}</td>

            {/* Add more table cells based on employee data */}
          </tr>
        ))}
      </tbody>
    </table>
      )}
    </div>
    
  );
};

export default EmployeeTable;


