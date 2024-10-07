const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
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

// Helper function to write to .env file
const storeEmailInEnv = (email) => {
  const envPath = '.env';

  // Read the existing .env content
  let envData = fs.readFileSync(envPath, 'utf-8');

  // If EMAIL_ID exists, update it; if not, add it without extra newlines
  if (envData.includes('EMAIL_ID=')) {
    // Replace the existing EMAIL_ID with the new one
    envData = envData.replace(/EMAIL_ID=.*/g, `EMAIL_ID=${email}`);
  } else {
    // Add EMAIL_ID at the end, without adding extra new lines
    envData = envData.trim() + `\nEMAIL_ID=${email}`;
  }

  // Write the updated content back to the .env file
  fs.writeFileSync(envPath, envData);
};

// Endpoint to store logged-in email in .env file
app.post('/api/store-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    // Store the email in the .env file
    storeEmailInEnv(email);
    res.send('Email stored successfully in .env file');
  } catch (error) {
    console.error('Error storing email in .env file:', error);
    res.status(500).send('Error storing email');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
