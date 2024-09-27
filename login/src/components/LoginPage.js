// src/components/LoginPage.js

import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './LoginPage.css';  // Create this CSS file for styles
import logo from './assets/logo.png';  // Place your logo image in the src/assets directory

const LoginPage = () => {
  const [error, setError] = useState(null);

  // Function to handle Google login
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`
          }
        });

        const userInfo = res.data;  // Store user details

        // Redirect based on user role (this logic can be customized)
        if (userInfo.email.includes('bharaneedharan.cb22@bitsathy.ac.in')) { // Example condition for admin email
          window.location.href = 'http://localhost:3000/admin/dashboard'; // Redirect to Admin Dashboard
        } else {
          window.location.href = 'http://localhost:3000/faculty/dashboard'; // Redirect to Faculty Dashboard
        }
      } catch (err) {
        console.error('Failed to fetch user info', err);
        setError('Failed to fetch user details');
      }
    },
    onError: () => {
      console.log('Login Failed');
      setError('Login Failed');
    },
  });

  const handleAdminPageClick = () => {
    login(); // Trigger Google login for Admin
  };

  const handleFacultyPageClick = () => {
    login(); // Trigger Google login for Faculty
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
        {error && <p>{error}</p>}
        <button className="google-sign-in" onClick={handleAdminPageClick}>Admin Sign In</button><p></p>
        <button className="google-sign-in" onClick={handleFacultyPageClick}>Faculty Sign In</button>
        <p className="sign-in-text">Sign in with your BIT account</p>
      </div>
    </div>
  );
};

export default LoginPage;
