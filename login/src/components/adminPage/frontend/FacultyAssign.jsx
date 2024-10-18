import React, { useState } from 'react';
import './FacultyAssign.css';

const FacultyAssign = () => {
  const [formData, setFormData] = useState({
    department: '',
    facultyId: '',
    facultyName: '',
    facultyEmail: '',
    semester: '',
    batchYear: '',
    subjectName: '',
    subjectCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log form data to check for empty fields
    console.log('Form data:', formData); // Log the form data

    // Prepare data to send (no admin email included)
    const dataToSend = {
      ...formData
    };

    try {
      const response = await fetch('http://localhost:5000/api/faculty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Faculty assigned:', result);
        // Optionally reset form or show success message
        setFormData({
          department: '',
          facultyId: '',
          facultyName: '',
          facultyEmail: '',
          semester: '',
          batchYear: '',
          subjectName: '',
          subjectCode: ''
        });
      } else {
        const errorMessage = await response.text();
        console.error('Error assigning faculty:', errorMessage);
      }
    } catch (error) {
      console.error('Error in submit:', error);
    }
  };

  return (
    <div className="faculty-assign-container">
      <h2>Assign Faculty</h2><br></br>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
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
          <label htmlFor="batchYear">Batch Year *</label>
          <input
            type="text"
            id="batchYear"
            name="batchYear"
            value={formData.batchYear}
            onChange={handleChange}
            placeholder="Enter Batch Year"
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
