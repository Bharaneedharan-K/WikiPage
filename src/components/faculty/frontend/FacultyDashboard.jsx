import React from 'react';
import './FacultyDashboard.css';

const FacultyDashboard = () => {
  return (
    <div className="faculty-dashboard-container">
      <div className="faculty-dashboard-grid">
        <div className="faculty-dashboard-card">
          <h3>Total Points</h3>
          <p>1500</p>
        </div>
        <div className="faculty-dashboard-card">
          <h3>Negative Point</h3>
          <p>-130</p>
        </div>
        <div className="faculty-dashboard-card">
          <h3>Complected Task</h3>
          <p>30</p>
        </div>
          <div className="faculty-dashboard-card">
          <h3>Pending Task</h3>
        <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
