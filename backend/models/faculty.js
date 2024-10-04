// models/faculty.js
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    facultyName: { type: String, required: true },
    facultyId: { type: String, required: true, unique: true },
    emailId: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    academicYear: { type: String, required: true },
    subjectCode: { type: String, required: true },
    subjectName: { type: String, required: true },
});

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;
