// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Admin Schema
const adminSchema = new mongoose.Schema({
  emailId: String,
});

const Admin = mongoose.model('Admin', adminSchema);

// API endpoint to get admin emails
app.get('/api/admin', async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admin emails:', error);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
