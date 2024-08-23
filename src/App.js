import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AdminPage from './components/adminPage/frontend/AdminPage';
import FacultyPage from './components/faculty/frontend/FacultyPage';
import LoginPage from './components/LoginPage'; // Adjust the import path if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the admin login page */}
          <Route path="/admin/login" element={<LoginPage />} />
          
          {/* Route for the admin dashboard and other admin-related pages */}
          <Route path="/admin/*" element={<AdminPage />} />
          
          {/* Route for the faculty page */}
          <Route path="/faculty" element={<FacultyPage />} />

          {/* Redirect to the admin login page if no other routes match */}
          <Route path="*" element={<Navigate to="/admin/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
