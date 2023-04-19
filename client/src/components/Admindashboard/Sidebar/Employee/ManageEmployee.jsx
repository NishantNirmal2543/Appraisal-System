
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:8080/api/deleteemployee/${id}`);
          setEmployees(employees.filter((employee) => employee._id !== id));
        } catch (error) {
          console.error(error);
        }
    }
  };


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/fetchemployee');
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className='card'>
      <h1>Manage Employees</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  style={{ marginRight: "10px", color: "#6a14a3" }}
                  onClick={() => handleViewClick(employee)}
                >
                  <AiOutlineEye />
                </button>
                <button style={{ marginRight: "10px", color: "#6a14a3" }} ><BsPencil /></button>
                <button style={{ marginRight: "10px", color: "#6a14a3" }} onClick={() => handleDelete(employee._id)}><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && (
        <div className='card'>
          <h2>{selectedEmployee.name}</h2>
          <p>College: {selectedEmployee.college}</p>
          <p>Department: {selectedEmployee.department}</p>
          <p>Designation: {selectedEmployee.designation}</p>
          <p>Email: {selectedEmployee.email}</p>
          <p>Mobile: {selectedEmployee.mobile}</p>
         
        </div>
      )}
    </div>
  )
};

export default ManageEmployee;
