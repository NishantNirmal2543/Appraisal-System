
import { Route, Routes, Navigate } from "react-router-dom";
import Main1 from "./components/Employeedashboard";
import Main2 from "./components/Hoddashboard";
import Main3 from "./components/Principaldashboard";
import Main4 from "./components/Admindashboard";

import Adminsignin from "./components/AdminLogin";
import Login from "./components/UserLogin";
import { useState } from "react";

function App() {
	const [adminState, setAdminState] = useState('');

	const getAdminState = (adminState)=>{
		setAdminState(adminState);
	}

	const user = localStorage.getItem("token");
	const admin = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/Employeedashboard" exact element={<Main1 />} />}
			{admin && <Route path="/Hoddashboard" exact element={<Main2 />} />}
			{admin && <Route path="/Principaldashboard" exact element={<Main3 />} />}
			{admin && <Route path="/Admindashboard" exact element={<Main4 />} />}


			
			<Route path="/" exact element={<Login />} />
			<Route path="/adminsignin" exact element={<Adminsignin  getAdminState = {getAdminState}/>} />

			<Route path="/Employeedashboard" element={<Navigate replace to="/" />} />
			<Route path="/Hoddashboard" element={<Navigate replace to="/adminsignin" />} />
			<Route path="/Principaldashboard" element={<Navigate replace to="/adminsignin" />} />
			<Route path="/Admindashboard" element={<Navigate replace to="/adminsignin" />} />

		</Routes>
	);
}

export default  App ;
