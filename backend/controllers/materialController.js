const Material = require('../models/materials');

exports.createMaterial = async (req, res) => {
    const { subject, faculty, unitNumber, topic, lectureMaterial, lectureVideo, discourse, status } = req.body;
    try {
        const newMaterial = await Material.create({ subject, faculty, unitNumber, topic, lectureMaterial, lectureVideo, discourse, status });
        res.status(201).json(newMaterial);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getMaterials = async (req, res) => {
    try {
        const materials = await Material.find().populate('faculty');
        res.status(200).json(materials);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
