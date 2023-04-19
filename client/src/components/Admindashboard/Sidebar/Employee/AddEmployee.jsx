

import React, { useState } from 'react';
import axios from "axios";
import "./Employee.css";

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({});
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCollegeChange = (e) => {
        setCollege(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handleDesignationChange = (e) => {
        setDesignation(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const errors = {};
      
        if (!name) {
          errors.name = 'Name is required';
        }
      
        if (!college) {
          errors.college = 'College is required';
        }
      
        if (!department) {
          errors.department = 'Department is required';
        }
      
        if (!designation) {
          errors.designation = 'Designation is required';
        }
      
        if (!email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email is invalid';
        }
      
        if (!mobile) {
          errors.mobile = 'Mobile is required';
        } else if (!/^\d{10}$/.test(mobile)) {
          errors.mobile = 'Mobile must be a 10 digit number';
        }
      
        if (!password.trim()) {
          errors.password = 'Password is required';
        } else if (password.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
      
        setErrors(errors);
      
        if (Object.keys(errors).length === 0) {
          try {
            const response = await axios.post("http://localhost:8080/api/employee", { 
              name, 
              college, 
              department, 
              designation, 
              email, 
              mobile, 
              password 
            });
      
            // handle the success response
            alert(response.data.message);
      
          } catch (error) {
            // handle the error response
            alert(error.response.data.message);
          }
        }
      };
      
    return (
        <div>
            <div className="card">
                <h1>Add Employee</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={handleNameChange} />
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>
                    <div>
                        <label htmlFor="college">College:</label>
                        <input type="text" id="college" value={college} onChange={handleCollegeChange} />
                        {errors.college && <div className="error">{errors.college}</div>}
                    </div>
                    <div>
                        <label htmlFor="department">Department:</label>
                        <input type="text" id="department" value={department} onChange={handleDepartmentChange} />
                        {errors.department && <div className="error">{errors.department}</div>}
                    </div>
                    <div>
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" id="designation" value={designation} onChange={handleDesignationChange} />
                        {errors.designation && <div className="error">{errors.designation}</div>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="tel" id="mobile" value={mobile} onChange={handleMobileChange} />
                        {errors.mobile && <div className="error">{errors.mobile}</div>}
                    </div>



                    <button className='buttonA' type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;