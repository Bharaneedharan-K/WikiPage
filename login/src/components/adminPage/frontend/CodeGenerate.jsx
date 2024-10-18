import React, { useState } from 'react';
import './CodeGenerate.css';

const CodeGenerate = () => {
  const [formData, setFormData] = useState({
    semester: '',
    subjectCode: '',
    unitNo: ''
  });

  const [generatedCode, setGeneratedCode] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `SEM-${formData.semester}-SUB-${formData.subjectCode}-UNIT-${formData.unitNo}`;
    setGeneratedCode(code);
  };

  return (
    <div className="code-generate-container">
      <h2>Generate Code</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="semester">Semester *</label>
          <input
            type="text"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            placeholder="Enter Semester"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subjectCode">Subject Code *</label>
          <input
            type="text"
            id="subjectCode"
            name="subjectCode"
            value={formData.subjectCode}
            onChange={handleChange}
            placeholder="Enter Subject Code"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="unitNo">Unit No *</label>
          <input
            type="text"
            id="unitNo"
            name="unitNo"
            value={formData.unitNo}
            onChange={handleChange}
            placeholder="Enter Unit No"
            required
          />
        </div>
      </form>

      <div className="form-actions">
        <button type="submit" className="generate-button" onClick={handleSubmit}>Generate Code</button>
      </div>

      {generatedCode && (
        <div className="generated-code">
          <h3>Generated Code:</h3>
          <p>{generatedCode}</p>
        </div>
      )}
    </div>
  );
};

export default CodeGenerate;
