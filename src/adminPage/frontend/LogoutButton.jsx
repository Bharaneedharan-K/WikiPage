import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    onLogout(); // Trigger any additional logout logic if needed
    navigate('/admin/login'); // Redirect to login page
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      <i className="fas fa-sign-out-alt"></i> {/* Font Awesome logout icon */}
    </button>
  );
};

export default LogoutButton;
