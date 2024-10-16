const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Admin = require('./models/admin'); // Import the Admin model
const MongoStore = require('connect-mongo'); // For storing sessions in MongoDB

dotenv.config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use session store for persistence in MongoDB
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    maxAge: 3600000, // 1 hour
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
  },
}));

// Admin-related routes

// API to fetch admin emails
app.get('/api/admin', async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admin emails:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// API to store logged-in email and name in session
app.post('/api/store-email', async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Email and name are required' });
  }

  try {
    const admin = await Admin.findOne({ emailId: email });
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized: Not an admin' });
    }

    req.session.email = email;
    req.session.name = name;
    res.json({ message: `Admin email ${email} and name ${name} stored in session` });
  } catch (error) {
    console.error('Error checking admin email:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// API to get session email and name
app.get('/api/get-email', (req, res) => {
  const email = req.session.email;
  const name = req.session.name;

  if (!email || !name) {
    return res.status(404).json({ error: 'No email or name found in session' });
  }

  res.json({ email, name });
});

// API to logout
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error during logout:', err);
      return res.status(500).json({ error: 'Error logging out' });
    }
    res.json({ message: 'User logged out, session cleared' });
  });
});

// Faculty Assignment-related routes

// Define a Faculty Assignment Schema
const facultyAssignSchema = new mongoose.Schema({
  department: { type: String, required: true },
  facultyId: { type: String, required: true },
  facultyName: { type: String, required: true },
  facultyEmail: { type: String, required: true },
  semester: { type: String, required: true },
  batchYear: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
});

// Create a model based on the schema with collection name 'facultyassign'
const FacultyAssign = mongoose.model('FacultyAssign', facultyAssignSchema, 'facultyassign');

// POST route to create a new faculty assignment
app.post('/api/faculty', async (req, res) => {
  try {
    const newAssignment = new FacultyAssign(req.body);
    const savedAssignment = await newAssignment.save();
    res.status(201).json(savedAssignment);
  } catch (error) {
    console.error('Error saving faculty assignment:', error);
    res.status(500).json({ error: 'Failed to save assignment' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
