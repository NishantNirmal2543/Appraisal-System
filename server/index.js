require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userauthRoutes = require("./routes/userauth");
const adminauthRoutes = require("./routes/adminauth");
const employeeRoutes = require("./routes/employee");

const fetchemployeeRoutes = require("./routes/fetchemployee")
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/userauth", userauthRoutes);
app.use("/api/adminauth", adminauthRoutes);

app.use("/api/employee" , employeeRoutes );

app.use("/api/fetchemployee", fetchemployeeRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
