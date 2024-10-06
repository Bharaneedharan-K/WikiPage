// src/components/LoginPage.js

import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './LoginPage.css';
import logo from './assets/logo.png';

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

        const userInfo = res.data;

        // Check if the user is an admin
        const adminRes = await axios.get('http://localhost:5000/api/admin');
        const adminEmails = adminRes.data.map(admin => admin.emailId);

        if (adminEmails.includes(userInfo.email)) {
          window.location.href = 'http://localhost:3000/admin/dashboard'; // Redirect to Admin Dashboard
        } else {
          setError('You are not authorized as an Admin.');
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

  // Handle Admin login
  const handleAdminLogin = () => {
    login(); // Trigger Google login for Admin
  };

  // Handle Faculty login (logic to be implemented later)
  const handleFacultyLogin = () => {
    // Logic for Faculty login will go here
    console.log('Faculty login logic not implemented yet.');
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
        <button className="google-sign-in" onClick={handleAdminLogin}>Admin Sign In</button>
        <p></p>
        <button className="google-sign-in" onClick={handleFacultyLogin}>Faculty Sign In</button>
        <p className="sign-in-text">Sign in with your BIT account</p>
      </div>
    </div>
  );
};

export default LoginPage;
