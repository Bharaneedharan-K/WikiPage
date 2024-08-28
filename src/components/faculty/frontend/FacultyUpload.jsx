import React from 'react';
import { useLocation } from 'react-router-dom';
import './FacultyUpload.css';

const FacultyUpload = () => {
  const location = useLocation();
  const dueDate = location.state?.dueDate || '2024-09-15'; // Default due date if not passed
  const submissionDate = new Date().toISOString().split('T')[0]; // Today's date as submission date

  return (
    <div className="upload-page">
      <div className="upload-form-container">
        <h2 className="upload-form-title">Upload Materials</h2>
        <form className="upload-form">
          <div className="form-group">
            <label>UNIT No. *</label>
            <input type="text" placeholder="Enter Unit Number" required />
          </div>
          <div className="form-group">
            <label>TOPIC *</label>
            <input type="text" placeholder="Enter Topic" required />
          </div>
          <div className="form-group">
            <label>LECTURE MATERIAL (pdf) *</label>
            <input type="file" accept=".pdf" required />
          </div>
          <div className="form-group">
            <label>LECTURE VIDEO (link) *</label>
            <input type="url" placeholder="Enter Lecture Video Link" required />
          </div>
          <div className="form-group">
            <label>DISCOURSE LINK *</label>
            <input type="url" placeholder="Enter Discourse Link" required />
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input type="text" value={dueDate} readOnly />
          </div>
          <div className="form-group">
            <label>Submission Date</label>
            <input type="text" value={submissionDate} readOnly />
          </div>
          <button type="submit" className="upload-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FacultyUpload;
