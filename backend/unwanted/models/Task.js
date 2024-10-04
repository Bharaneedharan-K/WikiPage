const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  department: { type: String, required: true },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
  subjectId: { type: String, required: true },
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('Task', taskSchema);
