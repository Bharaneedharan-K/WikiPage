// models/admin.js
const mongoose = require('mongoose');

// Admin Schema
const adminSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,  // Ensure each email ID is unique
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
