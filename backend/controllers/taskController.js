const Task = require('../models/task');

exports.createTask = async (req, res) => {
    const { facultyId, academicYear, department, subjectName, subjectId, status } = req.body;
    try {
        const newTask = await Task.create({ facultyId, academicYear, department, subjectName, subjectId, status });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('facultyId');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
