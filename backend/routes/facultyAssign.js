const express = require('express');
const router = express.Router();
const FacultyAssign = require('../models/facultyAssign'); // Import the FacultyAssign model

// POST route to create a new faculty assignment
router.post('/', async (req, res) => {
  try {
    const newAssignment = new FacultyAssign(req.body);
    const savedAssignment = await newAssignment.save();
    res.status(201).json(savedAssignment);
  } catch (error) {
    console.error('Error saving faculty assignment:', error);
    res.status(500).json({ error: 'Failed to save assignment' });
  }
});

module.exports = router;
