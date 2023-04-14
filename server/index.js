require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
// const userRoutes = require("./routes/users");
const userauthRoutes = require("./routes/userauth");
// const adminRoutes = require("./routes/admin");
const adminauthRoutes = require("./routes/adminauth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
// app.use("/api/users", userRoutes);
app.use("/api/userauth", userauthRoutes);
app.use("/api/adminauth", adminauthRoutes);
// app.use('/api',adminauthRoutes);  
// app.use("/api/admin", adminRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
