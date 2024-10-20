import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './AdminPage.css';

import AdminDashboard from './AdminDashboard';
import AssignPage from './FacultyAssign';
import ReportPage from './TaskAssign';
import RequestTask from './RequestTask';
import StatusPage from './PendingTask';
import CodeGenerate from './CodeGenerate';

const AdminPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  

  return (
    <div className="admin-container">
      <div className="top-bar">
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <div className={`hamburger ${sidebarVisible ? '' : 'active'}`} />
        </button>
        <h2 className="top-bar-title">BIT - Wiki Page Generation</h2>
      </div>

      <div className="main-content">
        {sidebarVisible && (
          <div className="sidebar">
            <nav className="sidebar-nav" aria-label="Admin Navigation">
              <ul className="sidebar-nav-list">
                <li className="sidebar-nav-item">
                  <Link to="/admin/dashboard" className="sidebar-nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/admin/assign" className="sidebar-nav-link">
                    Faculty Assign
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/admin/task" className="sidebar-nav-link">
                    Task Assign
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/admin/request-task" className="sidebar-nav-link">
                    Request Task
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/admin/pending" className="sidebar-nav-link">
                    Pending Task
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/admin/generate-code" className="sidebar-nav-link">
                    Generate Code
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="dashboard-content">
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="assign" element={<AssignPage />} />
            <Route path="task" element={<ReportPage />} />
            <Route path="request-task" element={<RequestTask />} />
            <Route path="pending" element={<StatusPage />} />
            <Route path="generate-code" element={<CodeGenerate />} />

            {/* Redirect /admin to /admin/dashboard */}
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />

            {/* Catch all other paths and redirect to Dashboard */}
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
