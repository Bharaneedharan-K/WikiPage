const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  unitNo: { type: Number, required: true },
  topic: { type: String, required: true },
  lectureMaterial: { type: String, required: true },
  lectureVideo: { type: String, required: true },
  discourseLink: { type: String, required: true }
});

module.exports = mongoose.model('Material', materialSchema);
