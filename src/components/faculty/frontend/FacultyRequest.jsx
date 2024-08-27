import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './FacultyPage.css';

const FacultyPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleUpload = (subjectId) => {
    console.log(`Upload for ${subjectId} clicked.`);
  };

  const sampleData = [
    { subjectId: 'SUB101', subjectName: 'Mathematics', semester: 'Fall 2024', dueDate: '2024-09-15' },
    { subjectId: 'SUB102', subjectName: 'Physics', semester: 'Fall 2024', dueDate: '2024-09-20' },
    { subjectId: 'SUB103', subjectName: 'Chemistry', semester: 'Fall 2024', dueDate: '2024-09-25' },
    { subjectId: 'SUB104', subjectName: 'Biology', semester: 'Fall 2024', dueDate: '2024-10-01' },
    { subjectId: 'SUB105', subjectName: 'Computer Science', semester: 'Fall 2024', dueDate: '2024-10-05' }
  ];

  return (
    <div className="faculty-container">
      {/* Top Bar */}
      <div className="faculty-top-bar">
        <button className="faculty-sidebar-toggle" onClick={toggleSidebar}>
          <div className={`faculty-hamburger ${sidebarVisible ? '' : 'active'}`} />
        </button>
        <h2 className="faculty-top-bar-title">Faculty Portal</h2>
      </div>

      {/* Main Content */}
      <div className={`faculty-main-content ${sidebarVisible ? '' : 'expanded'}`}>
        {/* Sidebar */}
        {sidebarVisible && (
          <div className="faculty-sidebar">
            <nav className="faculty-sidebar-nav">
              <ul className="faculty-sidebar-nav-list">
                <li className="faculty-sidebar-nav-item">
                  <Link to="/faculty/dashboard" className="faculty-sidebar-nav-link">Dashboard</Link>
                </li>
                <li className="faculty-sidebar-nav-item">
                  <Link to="/faculty/request" className="faculty-sidebar-nav-link">Request Task</Link>
                </li>
                <li className="faculty-sidebar-nav-item">
                  <Link to="/faculty/upload" className="faculty-sidebar-nav-link">Upload Material</Link>
                </li>
                <li className="faculty-sidebar-nav-item">
                  <Link to="/faculty/status" className="faculty-sidebar-nav-link">Task Status</Link>
                </li>
                <li className="faculty-sidebar-nav-item">
                  <Link to="/faculty/overview" className="faculty-sidebar-nav-link">Overview</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Dashboard Content */}
        <div className="faculty-dashboard-content">
          <table className="faculty-table">
            <thead>
              <tr>
                <th>Subject ID</th>
                <th>Subject Name</th>
                <th>Semester</th>
                <th>Due Date</th>
                <th>Upload</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((data, index) => (
                <tr key={index}>
                  <td>{data.subjectId}</td>
                  <td>{data.subjectName}</td>
                  <td>{data.semester}</td>
                  <td>{data.dueDate}</td>
                  <td><button className="upload-button" onClick={() => handleUpload(data.subjectId)}>Upload</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
