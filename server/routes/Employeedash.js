const express = require("express");
const router = new express.Router();
const {Employee} = require('../models/employee');
const authenticate = require("../middleware/authenticate");



// user valid
router.get("/validuser", authenticate, async (req, res) => {
    try {
      const employee = await Employee.findOne({ _id: req.userId });
      res.status(200).send({
       
        employee: {
            name: employee.name,
            email: employee.email,
            department: employee.department,
            college:employee.college,
            designation:employee.designation,
            mobile:employee.mobile,
        },
        message: "logged in successfully"
    });
    } catch (error) {
      res.status(401).json({ status: 401, error });
    }
  });
  

module.exports = router;