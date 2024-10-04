// models/materials.js
const mongoose = require('mongoose');

const materialsSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    faculty: { type: String, required: true },
    unitNumber: { type: Number, required: true },
    topic: { type: String, required: true },
    lectureMaterial: { type: String, required: true },
    lectureVideo: { type: String, required: true },
    discourse: { type: String, required: true },
    actions: { type: String, enum: ['approve', 'reject'], required: true },
});

const Materials = mongoose.model('Materials', materialsSchema);
module.exports = Materials;
