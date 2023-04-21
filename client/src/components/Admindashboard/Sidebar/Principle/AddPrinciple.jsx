
import React, { useState } from 'react';

import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPrinciple= () => {
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({});
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCollegeChange = (e) => {
        setCollege(e.target.value);
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
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const errors = {};

        if (!name) {
            errors.name = 'Name is required';
        }

        if (!college) {
            errors.college = 'College is required';
        }
        if (!role) {
            errors.role = 'Role is required';
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
                const response = await axios.post("http://localhost:8080/api/adminprinciple", {
                    name,
                    college,
                    
                    role,
                    email,
                    mobile,
                    password
                });

                // handle the success response       
                toast.success("Principle Added successfully");

            } catch (error) {
                // handle the error response
                alert(error.response.data.message);
            }
        }
    };


    return (
        <div>
            <div className="card">
                <h1>Add Principle</h1>
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
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" value={role} onChange={handleRoleChange} pattern="^principle$" title="Please enter 'principle'" />
                        {errors.role && <div className="error">{errors.role}</div>}
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



                    <button className='button1' type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddPrinciple;