

// import React from 'react'


// import { AiOutlineEye } from "react-icons/ai";
// import { BsPencil } from "react-icons/bs";
// import { RiDeleteBinLine } from "react-icons/ri"

// const ManageEmployee = () => {
//   const employees = [
//     {
//       id: 1,
//       name: 'John Doe',
//       department: 'Sales',
//       designation: 'Sales Representative',
//       email: 'john.doe@example.com'
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       department: 'Marketing',
//       designation: 'Marketing Manager',
//       email: 'jane.smith@example.com'
//     }
//   ];

//   return (
//     <div className='card'>
//       <h1>Manage Employees</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Department</th>
//             <th>Designation</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.name}</td>
//               <td>{employee.department}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.email}</td>
//               <td>
//                 <button style={{ marginRight: "10px",  color: "#6a14a3" }} ><AiOutlineEye /></button>
//                 <button style={{ marginRight: "10px", color: "#6a14a3" }} ><BsPencil /></button>
//                 <button style={{ marginRight: "10px", color: "#6a14a3" }} ><RiDeleteBinLine /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default ManageEmployee;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);


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
                <button style={{ marginRight: "10px",  color: "#6a14a3" }} ><AiOutlineEye /></button>
                <button style={{ marginRight: "10px", color: "#6a14a3" }} ><BsPencil /></button>
                <button style={{ marginRight: "10px", color: "#6a14a3" }} ><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default ManageEmployee;
