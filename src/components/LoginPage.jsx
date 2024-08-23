// LoginPage.js
import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="welcome-text">Welcome Back!</h2>
        <img
          src="logo.png" // Replace with your actual logo URL
          alt="Bannari Amman Institute of Technology"
          className="login-logo"
        />
        <hr className="divider" />
        <button className="google-sign-in">Google Sign In</button>
        <p className="sign-in-text">Sign in with your BIT account</p>
      </div>
    </div>
  );
};

export default LoginPage;
