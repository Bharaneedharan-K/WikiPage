// models/faculty.js
const mongoose = require('mongoose');

// Faculty Schema
const facultySchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  facultyId: {
    type: String,
    required: true,
  },
  facultyName: {
    type: String,
    required: true,
  },
  facultyEmail: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  batchYear: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  addedBy: { // To store the admin email who added this faculty
    type: String,
    required: true,
  },
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
