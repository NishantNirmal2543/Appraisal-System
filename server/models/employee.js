
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");



const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhotoURL: {
    type: String,
  },
});

employeeSchema.methods.generateAuthToken = function () {
  	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
  		// expiresIn: "7d",
     
  	});	
    	
    	// console.log(token);

  	return token;
    
  };


const Employee = mongoose.model('employee', employeeSchema);

module.exports = {Employee};
