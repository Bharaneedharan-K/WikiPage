import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './LoginPage.css';
import logo from './assets/logo.png';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAdminPageClick = () => {
    navigate('/admin/dashboard'); // Use navigate to go to the Admin Page
  };

  const handleFacultyPageClick = () => {
    navigate('/faculty'); // Use navigate to go to the Faculty Page
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="welcome-text">Welcome Back!</h2>
        <img
          src={logo}
          alt="Bannari Amman Institute of Technology"
          className="login-logo"
        />
        <hr className="divider" />
        <button className="google-sign-in">Google Sign In</button>
        <p className="sign-in-text">Sign in with your BIT account</p>
      </div>

      <div className="button-container">
        <button className="admin-page-button" onClick={handleAdminPageClick}>
          Go to Admin Page
        </button>
        <button className="faculty-page-button" onClick={handleFacultyPageClick}>
          Go to Faculty Page
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
