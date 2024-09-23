const Faculty = require('../models/faculty');

// Create new faculty
exports.createFaculty = async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        await newFaculty.save();
        res.status(201).json({ message: 'Faculty created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all faculty
exports.getFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get faculty by ID
exports.getFacultyById = async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
        res.status(200).json(faculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update faculty
exports.updateFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(faculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete faculty
exports.deleteFaculty = async (req, res) => {
    try {
        await Faculty.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Faculty deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
    