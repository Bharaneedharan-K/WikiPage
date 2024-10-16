const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from .env

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a Faculty Assignment Schema
const facultyAssignmentSchema = new mongoose.Schema({
  department: { type: String, required: true },
  facultyId: { type: String, required: true },
  facultyName: { type: String, required: true },
  facultyEmail: { type: String, required: true },
  semester: { type: String, required: true },
  batchYear: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
});

// Create a model based on the schema
const FacultyAssignment = mongoose.model('FacultyAssignment', facultyAssignmentSchema);

// POST route to create a new faculty assignment
app.post('/api/faculty', async (req, res) => {
  try {
    const newAssignment = new FacultyAssignment(req.body);
    const savedAssignment = await newAssignment.save();
    res.status(201).json(savedAssignment);
  } catch (error) {
    console.error('Error saving faculty assignment:', error);
    res.status(500).json({ error: 'Failed to save assignment' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
