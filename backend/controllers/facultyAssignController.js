// controllers/facultyAssignController.js
const FacultyAssign = require('../models/FacultyAssign');

// Controller to handle faculty assignment form submission
const assignFaculty = async (req, res) => {
  const {
    department,
    facultyId,
    facultyName,
    facultyEmail,
    semester,
    batchYear,
    subjectName,
    subjectCode,
    addedBy,
  } = req.body;

  try {
    // Retrieve admin name and email from session
    const adminEmail = req.session.email || addedBy;
    const adminName = req.session.name || 'Admin'; // Fallback to 'Admin' if name is not in session

    // Create a new faculty assignment entry
    const newAssignment = new FacultyAssign({
      department,
      facultyId,
      facultyName,
      facultyEmail,
      semester,
      batchYear,
      subjectName,
      subjectCode,
      addedByAdminEmail: adminEmail,
      addedByAdminName: adminName,
    });

    // Save to database
    const savedAssignment = await newAssignment.save();
    res.json(savedAssignment);
  } catch (error) {
    console.error('Error in faculty assignment:', error);
    res.status(500).send('Server error');
  }
};

// Export the controller function
module.exports = {
  assignFaculty,
};
