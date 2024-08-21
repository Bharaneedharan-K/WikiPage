import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './AdminPage.css';

import AdminDashboard from './AdminDashboard';
import AssignPage from './FacultyAssign';
import ReportPage from './TaskAssign';
import StatusPage from './StatusPage';
import GenerateCodePage from './GenerateCodePage';

const AdminPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logging out...');
  };

  return (
    <Router>
      <div className="admin-container">
        <div className="top-bar">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <div className={`hamburger ${sidebarVisible ? '' : 'active'}`} />
          </button>
          <h2 className="top-bar-title">BIT - Wiki Page Generation</h2>
          <button className="logout-button" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> {/* Font Awesome logout icon */}
          </button>
        </div>
        <div className="main-content">
          {sidebarVisible && (
            <div className="sidebar">
              <nav className="sidebar-nav">
                <ul className="sidebar-nav-list">
                  <li className="sidebar-nav-item">
                    <Link to="/admin/dashboard" className="sidebar-nav-link">Dashboard</Link>
                  </li>
                  <li className="sidebar-nav-item">
                    <Link to="/admin/assign" className="sidebar-nav-link">Faculty Assign</Link>
                  </li>
                  <li className="sidebar-nav-item">
                    <Link to="/admin/task" className="sidebar-nav-link">Task Assign</Link>
                  </li>
                  <li className="sidebar-nav-item">
                    <Link to="/admin/status" className="sidebar-nav-link">Status</Link>
                  </li>
                  <li className="sidebar-nav-item">
                    <Link to="/admin/generate-code" className="sidebar-nav-link">Generate Code</Link> 
                  </li>
                </ul>
              </nav>
            </div>
          )}
          <div className="dashboard-content">
            <Routes>
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
              <Route path='/admin/assign' element={<AssignPage />} />
              <Route path='/admin/task' element={<ReportPage />} />
              <Route path='/admin/status' element={<StatusPage />} />
              <Route path='/admin/generate-code' element={<GenerateCodePage />} />
              <Route path='*' element={<Navigate to='/admin/dashboard' />} /> {/* Redirect to dashboard by default */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AdminPage;
