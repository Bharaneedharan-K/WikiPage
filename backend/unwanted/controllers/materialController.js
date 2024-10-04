const Material = require('../models/Material');

// Create Material
exports.addMaterial = async (req, res) => {
  try {
    const { unitNo, topic, lectureMaterial, lectureVideo, discourseLink } = req.body;

    const newMaterial = new Material({ unitNo, topic, lectureMaterial, lectureVideo, discourseLink });
    await newMaterial.save();
    res.status(201).json({ message: 'Material added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Materials
exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.status(200).json(materials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
