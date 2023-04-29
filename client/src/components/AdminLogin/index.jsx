import {  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Adminsignin = (props) => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	 
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/adminauth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			// console.log(res)
			if(res.role === "hod"){window.location = "/Hoddashboard";}
			else if(res.role === "principle"){window.location = "/Principaldashboard";}
			else if(res.role === "Admin"){window.location = "/Admindashboard";}

			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Employee</h1>
					<Link to="/">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Admin Login</h1>
						{/* <select
							name="role"
							value={data.role}
							ref = {inputRef}
							 
							required
							className={styles.input}
						>
							<option value="hod">HOD</option>
							<option value="principal">Principle</option>
						</select> */}
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Adminsignin;

