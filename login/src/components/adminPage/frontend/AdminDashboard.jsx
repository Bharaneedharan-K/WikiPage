import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const tasks = [
    { label: 'Total Number of Task', count: '25' },
    { label: 'Task Pending', count: '5' },
    { label: 'Task Requests', count: '3' },
    { label: 'Task Completed', count: '17' },
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
