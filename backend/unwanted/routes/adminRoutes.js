const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); // Adjust the path as needed

// Create a new admin
router.post('/', adminController.addAdmin);

// Get all admins
router.get('/', adminController.getAdmins);

// Get a single admin by ID
// router.get('/:id', adminController.getAdminById);

// Update an admin by ID
// router.put('/:id', adminController.updateAdmin);

// Delete an admin by ID
// router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
