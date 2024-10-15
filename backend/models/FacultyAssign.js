// models/FacultyAssign.js
const mongoose = require('mongoose');

// Define the schema for faculty assignment
const facultyAssignSchema = new mongoose.Schema({
  department: { type: String, required: true },
  facultyId: { type: String, required: true },
  facultyName: { type: String, required: true },
  facultyEmail: { type: String, required: true },
  semester: { type: String, required: true },
  batchYear: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
  addedByAdminEmail: { type: String, required: true }, // Admin email for tracking
  addedByAdminName: { type: String, required: true }, // Admin name for tracking
});

// Create and export the model
const FacultyAssign = mongoose.model('FacultyAssign', facultyAssignSchema);
module.exports = FacultyAssign;
