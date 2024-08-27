import React from 'react';
import './FacultyDashboard.css';

const FacultyDashboard = () => {
  return (
    <div className="faculty-dashboard-container">
      <div className="faculty-dashboard-grid">
        {/* Card 1 */}
        <div className="faculty-dashboard-card">
          <h3>Upcoming Tasks</h3>
          <p>View all your upcoming tasks and deadlines.</p>
        </div>
        {/* Card 2 */}
        <div className="faculty-dashboard-card">
          <h3>Submitted Requests</h3>
          <p>Check the status of your submitted requests.</p>
        </div>
        {/* Card 3 */}
        <div className="faculty-dashboard-card">
          <h3>Materials Uploaded</h3>
          <p>See all the materials you have uploaded.</p>
        </div>
        {/* Card 4 */}
        <div className="faculty-dashboard-card">
          <h3>Notifications</h3>
          <p>Stay updated with the latest notifications.</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
