
import { Route, Routes, Navigate } from "react-router-dom";
import Main1 from "./components/Employeedashboard";
import Main2 from "./components/Hoddashboard";
import Main3 from "./components/Principaldashboard";
import Main4 from "./components/Admindashboard";

import Adminsignin from "./components/AdminLogin";
import Login from "./components/UserLogin";
import { useState } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from "./components/Admindashboard/Sidebar/Employee/ResetPassword";


function App() {
	const [adminState, setAdminState] = useState('');

	const getAdminState = (adminState)=>{
		setAdminState(adminState);
	}

	const user = localStorage.getItem("token");
	const admin = localStorage.getItem("token");

	return (
		<>
		<ToastContainer position="top-center" />
		<Routes>
			{user && <Route path="/Employeedashboard" exact element={<Main1 />} />}
			{admin && <Route path="/Hoddashboard" exact element={<Main2 />} />}
			{admin && <Route path="/Principaldashboard" exact element={<Main3 />} />}
			{admin && <Route path="/Admindashboard" exact element={<Main4 />} />}


			<Route path="/ResetPassword" exact element={<ResetPassword />} />

			<Route path="/" exact element={<Login />} />
			<Route path="/adminsignin" exact element={<Adminsignin  getAdminState = {getAdminState}/>} />
 
			<Route path="/Employeedashboard" element={<Navigate replace to="/" />} />
			<Route path="/Hoddashboard" element={<Navigate replace to="/adminsignin" />} />
			<Route path="/Principaldashboard" element={<Navigate replace to="/adminsignin" />} />
			<Route path="/Admindashboard" element={<Navigate replace to="/adminsignin" />} />

		</Routes>
		</>
	);
}

export default  App ;
