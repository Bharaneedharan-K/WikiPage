const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const Admin = require('./models/admin'); // Import the Admin model
const MongoStore = require('connect-mongo'); // For storing sessions in MongoDB
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

// Use session store for better persistence in MongoDB
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key', // Use environment variable for security
  resave: false,
  saveUninitialized: false, // Avoid creating sessions for unauthenticated users
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }), // Store sessions in MongoDB
  cookie: {
    maxAge: 3600000, // 1 hour in milliseconds
    secure: process.env.NODE_ENV === 'production', // Set secure to true in production (HTTPS)
    httpOnly: true, // Protect against XSS attacks
    sameSite: 'strict', // Prevent CSRF attacks
  },
}));

// API endpoint to get admin emails
app.get('/api/admin', async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admin emails:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to store logged-in email and name in session (only if authorized as Admin)
app.post('/api/store-email', async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Email and name are required' });
  }

  try {
    // Check if the email exists in the Admin collection
    const admin = await Admin.findOne({ emailId: email });
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized: Not an admin' });
    }

    // If admin is found, store the email and name in session
    req.session.email = email;
    req.session.name = name;
    res.json({ message: `Admin email ${email} and name ${name} stored temporarily in session` });
  } catch (error) {
    console.error('Error checking admin email:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to get the logged-in user's email and name from session
app.get('/api/get-email', (req, res) => {
  const email = req.session.email;
  const name = req.session.name;

  if (!email || !name) {
    return res.status(404).json({ error: 'No email or name found in session' });
  }

  res.json({ email, name });
});

// Endpoint to clear session (logout)
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error during logout:', err);
      return res.status(500).json({ error: 'Error logging out' });
    }
    res.json({ message: 'User logged out, session cleared' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
