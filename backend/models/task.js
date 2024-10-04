// models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    facultyId: { type: String, required: true },
    academicYear: { type: String, required: true },
    department: { type: String, required: true },
    subjectName: { type: String, required: true },
    subjectId: { type: String, required: true },
    status: { type: String, enum: ['completed', 'not completed', 'wait for request'], required: true },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
