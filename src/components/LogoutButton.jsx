import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    onLogout(); 
    navigate('/admin/login'); 
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      <i className="fas fa-sign-out-alt"></i> 
    </button>
  );
};

export default LogoutButton;
