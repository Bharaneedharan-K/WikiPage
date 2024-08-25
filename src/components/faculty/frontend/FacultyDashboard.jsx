import React from 'react';
import './FacultyDashboard.css'; // Ensure you create this CSS file for styling

const FacultyDashboard = () => {
  // Data for tasks and their statuses
  const tasks = [
    { label: 'Total Tasks', count: '20' },
    { label: 'Pending Tasks', count: '7' },
    { label: 'Requests Made', count: '2' },
    { label: 'Completed Tasks', count: '11' },
  ];

  return (
    <div className="dashboard-container">
      {tasks.map((task, index) => (
        <div key={index} className="task-card">
          <h3>{task.label}</h3>
          <ul className="count-list">
            <li className="count-item">{task.count}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FacultyDashboard;
