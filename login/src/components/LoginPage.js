import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './LoginPage.css';
import logo from './assets/logo.png';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Function to handle Google login
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      try {
        // Fetch the user info from Google
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const userInfo = res.data;
        console.log('User Info:', userInfo);

        // Store the email and name in the backend
        try {
          const emailRes = await axios.post('http://localhost:5000/api/store-email', {
            email: userInfo.email,
            name: userInfo.name,
          });
          console.log(emailRes.data); // Success message
        } catch (emailError) {
          console.error('Error storing email and name:', emailError);
          setError('Failed to store email and name in backend');
        }

        // Check if the user is an admin
        const adminRes = await axios.get('http://localhost:5000/api/admin');
        const adminEmails = adminRes.data.map(admin => admin.emailId);

        if (adminEmails.includes(userInfo.email)) {
          navigate('/admin/dashboard');  // Redirect to Admin Page upon successful login
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
