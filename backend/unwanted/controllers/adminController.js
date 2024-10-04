// controllers/adminController.js
const Admin = require('../models/AdminModel');

// Create Admin
exports.addAdmin = async (req, res) => {
  try {
    const { department, facultyId, facultyName, emailId, subjectName, subjectCode, password } = req.body;

    // Hash the password here using bcrypt or similar
    const newAdmin = new Admin({ department, facultyId, facultyName, emailId, subjectName, subjectCode, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
