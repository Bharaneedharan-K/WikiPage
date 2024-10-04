const express = require('express');
const { addTask, getTasks } = require('../controllers/taskController');
const router = express.Router();

router.post('/task', addTask);
router.get('/tasks', getTasks);

module.exports = router;
