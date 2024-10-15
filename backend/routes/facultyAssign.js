// routes/facultyAssign.js
const express = require('express');
const router = express.Router();
const { assignFaculty } = require('../controllers/facultyAssignController');

// Route for handling faculty assignment
router.post('/faculty', assignFaculty);

module.exports = router;
