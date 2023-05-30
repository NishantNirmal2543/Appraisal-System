
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Employee.css";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [mode, setMode] = useState("");

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
    setMode("view");
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setMode("edit");
  };




  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/deleteemployee/${id}`);
        setEmployees(employees.filter((employee) => employee._id !== id));
        toast.success("Employee deleted successfully");
      } catch (error) {
        console.error(error);
      }
    }
  };


  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchemployee');
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);


  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedEmployee = {
      name: selectedEmployee.name,
      college: selectedEmployee.college,
      department: selectedEmployee.department,
      designation: selectedEmployee.designation,
      email: selectedEmployee.email,
      mobile: selectedEmployee.mobile,
    };
    try {
      const res = await axios.put(`http://localhost:8080/api/updateemployee/${selectedEmployee._id}`, updatedEmployee);
      const data = res.data;
      if (data.error) {
        console.log(data.error);
      } else {
        setSelectedEmployee({});
        setMode('');
        fetchEmployees();
      }
      toast.success("Employee updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update student, please try again later");
    }
  };

  return (
    <div className='card'>
      <h1 >Manage Employees</h1>
      <table class="employee-table">
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
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewClick(employee)} >  <AiOutlineEye  /> </button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleEditClick(employee)}><BsPencil /></button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleDelete(employee._id)}><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {mode === "view" && (
        <div className='card3'>
          <h2>{selectedEmployee.name}</h2>
          <p>College: {selectedEmployee.college}</p>
          <p>Department: {selectedEmployee.department}</p>
          <p>Designation: {selectedEmployee.designation}</p>
          <p>Email: {selectedEmployee.email}</p>
          <p>Mobile: {selectedEmployee.mobile}</p>

        </div>
      )}
      {mode === "edit" && (
        <div className='card1'>
          <h2>Edit Employee</h2>
          <form onSubmit={handleUpdate}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' value={selectedEmployee.name} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='college'>College:</label>
              <input type='text' id='college' name='college' value={selectedEmployee.college} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, college: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='department'>Department:</label>
              <input type='text' id='department' name='department' value={selectedEmployee.department} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='designation'>Designation:</label>
              <input type='text' id='designation' name='designation' value={selectedEmployee.designation} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, designation: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' value={selectedEmployee.email} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, email: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='mobile'>Mobile:</label>
              <input type='text' id='mobile' name='mobile' value={selectedEmployee.mobile} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, mobile: e.target.value })} />
            </div>
            <button className='button3' type='submit'>Update</button>

          </form>
        </div>
      )}

    </div>
  )
};

export default ManageEmployee;
