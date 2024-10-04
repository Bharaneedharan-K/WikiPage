const express = require('express');
const { addMaterial, getMaterials } = require('../controllers/materialController');
const router = express.Router();

router.post('/material', addMaterial);
router.get('/materials', getMaterials);

module.exports = router;
