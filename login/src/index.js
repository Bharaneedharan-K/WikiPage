// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminPage from './components/adminPage/frontend/AdminPage';
import FacultyPage from './components/faculty/frontend/FacultyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="253278043665-5r9rqkm071808l0iunudqk2371emklng.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/faculty/*" element={<FacultyPage />} /> {/* Login page */}
          {/* Add other routes here as needed */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
