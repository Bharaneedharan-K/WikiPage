// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  department: { type: String, required: true },
  facultyId: { type: String, required: true },
  facultyName: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
  password: { type: String, required: true } // Store hashed password
});

module.exports = mongoose.model('AdminModel', adminSchema);
