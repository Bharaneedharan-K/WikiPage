import React, { useState } from 'react';
import './FacultyAssign.css';

const FacultyAssign = () => {
  const [formData, setFormData] = useState({
    department: '',
    facultyId: '',
    facultyName: '',
    facultyEmail: '',
    subjectName: '',
    subjectCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="faculty-assign-container">
      <h2>Assign Faculty</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="department">Department *</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter Department"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyId">Faculty ID *</label>
          <input
            type="text"
            id="facultyId"
            name="facultyId"
            value={formData.facultyId}
            onChange={handleChange}
            placeholder="Enter Faculty ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyName">Faculty Name *</label>
          <input
            type="text"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            placeholder="Enter Faculty Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyEmail">Faculty Email ID *</label>
          <input
            type="email"
            id="facultyEmail"
            name="facultyEmail"
            value={formData.facultyEmail}
            onChange={handleChange}
            placeholder="Enter Faculty Email ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subjectName">Subject Name *</label>
          <input
            type="text"
            id="subjectName"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
            placeholder="Enter Subject Name"
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

        <div className="form-actions">
          <button type="submit" className="assign-button">Assign Faculty</button>
        </div>
      </form>
    </div>
  );
};

export default FacultyAssign;
