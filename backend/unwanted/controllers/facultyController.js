const Faculty = require('../models/Faculty'); // Adjust the path as necessary

// Create Faculty
exports.addFaculty = async (req, res) => {
  try {
    const { department, facultyId, facultyName, emailId, subjectName, subjectCode } = req.body;

    const newFaculty = new Faculty({ department, facultyId, facultyName, emailId, subjectName, subjectCode });
    await newFaculty.save();
    res.status(201).json({ message: 'Faculty added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Faculties
exports.getFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.status(200).json(faculties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
