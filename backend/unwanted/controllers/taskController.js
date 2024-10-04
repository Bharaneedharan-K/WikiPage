const Task = require('../models/Task');

// Create Task
exports.addTask = async (req, res) => {
  try {
    const { department, faculty, subjectId, dueDate } = req.body;

    const newTask = new Task({ department, faculty, subjectId, dueDate });
    await newTask.save();
    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('faculty', 'facultyName');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
