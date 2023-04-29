require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userauthRoutes = require("./routes/userauth");
const adminauthRoutes = require("./routes/adminauth");

const employeeRoutes = require("./routes/employee");

const fetchemployeeRoutes = require("./routes/fetchemployee")

const deleteemployeeRoutes = require("./routes/deleteemployee");

const updateemployeeRoutes = require("./routes/updateemployee");

const  adminhodRoutes = require("./routes/hod");

const deletehodRoutes =  require("./routes/deletehod");

const updatehodRoutes = require("./routes/updatehod");

const fetchhodRoutes = require("./routes/fetchhod");

const adminprincipleRoutes = require("./routes/principle");

const fetchprincipleRoutes  =  require("./routes/fetchprinciple");

const updateprincipleRoutes =  require("./routes/updateprinciple");

const deleteprincipleRoutes = require("./routes/deleteprinciple");

const router = require("./routes/employeedash");

const router1 = require("./routes/Admindash");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

//user auth

app.use("/api/userauth", userauthRoutes);

// routes employee

app.use("/api/employee" , employeeRoutes );

app.use("/api/fetchemployee", fetchemployeeRoutes);

app.use("/api/deleteemployee" , deleteemployeeRoutes);

app.use("/api/updateemployee" , updateemployeeRoutes)


//admin auth

app.use("/api/adminauth", adminauthRoutes);

//routes hod


app.use("/api/adminhod" , adminhodRoutes );

app.use("/api/fetchhod" , fetchhodRoutes );


app.use("/api/deletehod" , deletehodRoutes);

app.use("/api/updatehod" , updatehodRoutes);


//routes principle

app.use("/api/adminprinciple" , adminprincipleRoutes);

app.use("/api/fetchprinciple" , fetchprincipleRoutes );

app.use("/api/deleteprinciple" , deleteprincipleRoutes);

app.use("/api/updateprinciple" , updateprincipleRoutes);


app.use(router)

app.use(router1)

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
