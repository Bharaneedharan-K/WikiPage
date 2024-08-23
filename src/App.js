// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AdminPage from './adminPage/frontend/AdminPage';
import LoginPage from './LoginPage'; // Adjust the import path accordingly

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/admin/login" />} /> {/* Redirect to login by default */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
