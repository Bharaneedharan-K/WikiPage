const express = require('express');
const router = express.Router();
const { addFaculty, getFaculties } = require('../controllers/facultyController'); // Make sure this path is correct

// Route for adding a faculty
router.post('/', addFaculty);

// Route for getting all faculties
router.get('/', getFaculties);

module.exports = router;
