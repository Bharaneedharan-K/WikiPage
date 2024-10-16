// models/facultyAssign.js

const mongoose = require('mongoose');

// Define the Faculty Assignment Schema
const facultyAssignSchema = new mongoose.Schema({
  department: { type: String, required: true },
  facultyId: { type: String, required: true },
  facultyName: { type: String, required: true },
  facultyEmail: { type: String, required: true },
  semester: { type: String, required: true },
  batchYear: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
});

// Create a model from the schema
const FacultyAssign = mongoose.model('FacultyAssign', facultyAssignSchema);

// Export the model
module.exports = FacultyAssign;
