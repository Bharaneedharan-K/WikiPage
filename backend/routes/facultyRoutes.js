const express = require('express');
const { createFaculty, getFaculties } = require('../controllers/facultyController');
const router = express.Router();

router.post('/', createFaculty);
router.get('/', getFaculties);

module.exports = router;
