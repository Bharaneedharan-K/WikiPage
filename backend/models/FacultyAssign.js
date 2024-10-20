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

// Create and export the model with collection name 'facultyassign'
const FacultyAssign = mongoose.model('FacultyAssign', facultyAssignSchema, 'facultyassign');
module.exports = FacultyAssign;
