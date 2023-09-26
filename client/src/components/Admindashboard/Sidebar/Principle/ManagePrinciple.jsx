
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Principle.css";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagePrinciple = () => {
  const [principles, setprinciples] = useState([]);
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  const [mode, setMode] = useState("");

  const handleViewClick = (principle) => {
    setSelectedPrinciple(principle);
    setMode("view");
  };

  const handleEditClick = (principle) => {
    setSelectedPrinciple(principle);
    setMode("edit");
  };




  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Principle?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/deleteprinciple/${id}`);
        setprinciples(principles.filter((principle) => principle._id !== id));
        toast.success("Principle deleted successfully");
      } catch (error) {
        console.error(error);
      }
    }
  };


  const fetchprinciples = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/fetchprinciple');
      setprinciples(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchprinciples();
  }, []);


  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPrinciple = {
      name: selectedPrinciple.name,
      college: selectedPrinciple.college,

      role: selectedPrinciple.role,
      email: selectedPrinciple.email,
      mobile: selectedPrinciple.mobile,
    };
    try {
      const res = await axios.put(`http://localhost:8080/api/updatehod/${selectedPrinciple._id}`, updatedPrinciple);
      const data = res.data;
      if (data.error) {
        console.log(data.error);
      } else {
        setSelectedPrinciple({});
        setMode('');
        fetchprinciples();
      }
      toast.success("Principle updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update Principle, please try again later");
    }
  };

  return (
    <div className='cardP'>
      <h1>Manage Principle</h1>
      <table class="employee-table">
        <thead>
          <tr>
            <th>Name</th>

            <th>College</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {principles.map((principle) => (
            <tr key={principle._id}>
              <td>{principle.name}</td>

              <td>{principle.college}</td>
              <td>{principle.email}</td>
              <td>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewClick(principle)} >  <AiOutlineEye /> </button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleEditClick(principle)}><BsPencil /></button>
                <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleDelete(principle._id)}><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {mode === "view" && (
        <div className='card3'>
          <h2>{selectedPrinciple.name}</h2>
          <p>College: {selectedPrinciple.college}</p>

          <p>Role: {selectedPrinciple.role}</p>
          <p>Email: {selectedPrinciple.email}</p>
          <p>Mobile: {selectedPrinciple.mobile}</p>

        </div>
      )}
      {mode === "edit" && (
        <div className='card1'>
          <h2>Edit Principles</h2>
          <form onSubmit={handleUpdate}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' value={selectedPrinciple.name} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, name: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='college'>College:</label>
              <input type='text' id='college' name='college' value={selectedPrinciple.college} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, college: e.target.value })} />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' value={selectedPrinciple.email} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, email: e.target.value })} />
            </div>
            <div className='form-group'>
              <label htmlFor='mobile'>Mobile:</label>
              <input type='text' id='mobile' name='mobile' value={selectedPrinciple.mobile} onChange={(e) => setSelectedPrinciple({ ...selectedPrinciple, mobile: e.target.value })} />
            </div>
            <button className='button3' type='submit'>Update</button>

          </form>
        </div>
      )}

    </div>
  )
};

export default ManagePrinciple;
