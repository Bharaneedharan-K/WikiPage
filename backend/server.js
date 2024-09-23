const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Load environment variables from .env file
dotenv.config();

// Validate required environment variables
if (!process.env.MONGO_URI || !process.env.PORT) {
  console.error('Error: Missing essential environment variables.');
  process.exit(1); // Exit the app if important variables are missing
}

// Import routes
const facultyRoutes = require('./routes/facultyRoutes');
const adminRoutes = require('./routes/adminRoutes');
const materialRoutes = require('./routes/materialRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Logging

// API Routes
app.use('/api/faculties', facultyRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/tasks', taskRoutes);

// Catch-all route for handling 404 (unknown routes)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ message: err.message || 'Server Error', stack: process.env.NODE_ENV === 'development' ? err.stack : {} });
});

// MongoDB connection using environment variable
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the app if DB connection fails
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
