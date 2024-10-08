// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');  // Session package
const Admin = require('./models/admin');  // Import the Admin model
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Session Middleware
app.use(session({
  secret: 'your-secret-key', // Replace with a secure secret
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000, // 1 hour in milliseconds
    secure: false,   // Set to true if using HTTPS
  },
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

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

// Endpoint to store logged-in email in session
app.post('/api/store-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  // Store email in session
  req.session.email = email;
  res.send(`Email ${email} stored temporarily in session`);
});

// Endpoint to get the logged-in user's email from session
app.get('/api/get-email', (req, res) => {
  const email = req.session.email;

  if (!email) {
    return res.status(404).send('No email found in session');
  }

  res.json({ email });
});

// Endpoint to clear session (logout)
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.send('User logged out, session cleared');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
