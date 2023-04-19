const router = require("express").Router();
const {Employee} = require('../models/employee')


router.post('/', async (req, res) => {
	const { name, college, department, designation, email, mobile, password } = req.body;
  
	try {
	  const employee = new Employee({ name, college, department, designation, email, mobile, password });
	  await employee.save();
	  res.status(201).json({ success: true, message: 'Employee added successfully' });
	} catch (err) {
	  res.status(400).json({ success: false, message: err.message });
	}
  });
  




module.exports = router;
