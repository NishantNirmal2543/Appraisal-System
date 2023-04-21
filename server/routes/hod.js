const router = require("express").Router();
const {Admin} = require('../models/admin')


router.post('/', async (req, res) => {
	const { name, college, department, email, mobile, password ,role} = req.body;
  
	try {
	  const admin = new Admin({ name, college, department,  email, mobile, password ,role});
	  await admin.save();
	  res.status(201).json({ success: true, message: 'Employee added successfully' });
	} catch (err) {
	  res.status(400).json({ success: false, message: err.message });
	}
  });
  




module.exports = router;
