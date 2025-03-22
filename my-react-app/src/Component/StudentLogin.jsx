import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './ParentPortal.css'; // Import the CSS file for styling

const ParentPortal = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleAccessPortal = () => {
    // Navigate to the parent portal dashboard
    navigate('/parent-dashboard');
  };

  return (
    <div className="parent-portal-container">
      <h1>Welcome to the Parent Portal</h1>
      <p>Your gateway to stay connected with your child's academic progress and updates.</p>
      <button className="access-portal-button" onClick={handleAccessPortal}>
        Access Parent Portal
      </button>
    </div>
  );
};

export default ParentPortal;
