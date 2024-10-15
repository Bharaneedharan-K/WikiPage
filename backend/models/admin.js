const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Admin', adminSchema);
