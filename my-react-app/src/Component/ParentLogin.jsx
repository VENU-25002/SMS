import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './ParentPortal.css'; // Import the CSS file for styling

const ParentLogin = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleAccessPortal = () => {
    // Navigate to the parent dashboard
    navigate('/parent-portal');
  };

  return (
    <div className="parent-portal-container">
      <h1>Welcome to the Parent Login</h1>
      <p>Access the Parent Portal to view your child's progress and updates.</p>
      <button className="access-portal-button" onClick={handleAccessPortal}>
        Login to Parent Portal
      </button>
    </div>
  );
};

export default ParentLogin;
