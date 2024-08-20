import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Data for tasks and their statuses
  const tasks = [
    { label: 'Total Number of Tasks', count: '25' },
    { label: 'Tasks Pending', count: '5' },
    { label: 'Requests', count: '3' },
    { label: 'Tasks Completed', count: '18' },
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
}

export default AdminDashboard;
