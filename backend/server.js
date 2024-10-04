// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Admin = require('./models/admin');
const Faculty = require('./models/faculty');
const Task = require('./models/task');
const Materials = require('./models/materials');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Create a new admin
app.post('/admin', async (req, res) => {
    try {
        const newAdmin = new Admin({ emailId: req.body.emailId });
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Create a new faculty
app.post('/faculty', async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        await newFaculty.save();
        res.status(201).json(newFaculty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Create a new task
app.post('/task', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Create new materials
app.post('/materials', async (req, res) => {
    try {
        const newMaterials = new Materials(req.body);
        await newMaterials.save();
        res.status(201).json(newMaterials);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
