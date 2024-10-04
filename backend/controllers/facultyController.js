const Faculty = require('../models/faculty');

exports.createFaculty = async (req, res) => {
    const { facultyName, facultyId, email, department, academicYear, subjectCode, subjectName } = req.body;
    try {
        const newFaculty = await Faculty.create({ facultyName, facultyId, email, department, academicYear, subjectCode, subjectName });
        res.status(201).json(newFaculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
