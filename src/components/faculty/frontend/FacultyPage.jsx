import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './FacultyPage.css';

import FacultyDashboard from './FacultyDashboard';
import FacultyRequest from './FacultyRequest';
import FacultyUpload from './FacultyUpload';
import FacultyStatus from './FacultyStatus';
import FacultyOverview from './FacultyOverview';
import LogoutButton from '../../LogoutButton';

const FacultyPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    console.log("Logout successful.");
  };

  return (
    <div className="faculty-container">
      {/* Top Bar */}
      <div className="faculty-top-bar">
        <button className="faculty-sidebar-toggle" onClick={toggleSidebar}>
          <div className={`faculty-hamburger ${sidebarVisible ? '' : 'active'}`} />
        </button>
        <h2 className="faculty-top-bar-title">Faculty Portal</h2>
        <LogoutButton onLogout={handleLogout} />
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
          <Routes>
            <Route path="dashboard" element={<FacultyDashboard />} />
            <Route path="request" element={<FacultyRequest />} />
            <Route path="upload" element={<FacultyUpload />} />
            <Route path="status" element={<FacultyStatus />} />
            <Route path="overview" element={<FacultyOverview />} />
            <Route path="*" element={<Navigate to="/faculty/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
  