const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  facultyId: {
    type: String,
    required: true,
    unique: true,
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
  addedBy: {
    type: String, // Email of the admin who added the faculty
    required: true,
  },
});

module.exports = mongoose.model('Faculty', facultySchema);
