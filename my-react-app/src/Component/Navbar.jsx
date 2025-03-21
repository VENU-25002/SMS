import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  return (
    <nav className="navbar">
      {/* Navbar Header */}
      <h1 className="navbar-header">School Management System</h1>

      {/* Three-Bar Button */}
      <button
        className="three-bar-button"
        aria-label="More Options"
        onClick={() => setShowMenu(!showMenu)} // Toggle dropdown menu visibility
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="dropdown-menu">
          <button
            className="dropdown-item"
            onClick={() => navigate('/signup')} // Navigate to Sign Up page
          >
            Sign Up
          </button>
          <button
            className="dropdown-item"
            onClick={() => navigate('/choose-user')} // Navigate to Login page
          >
            Login
          </button>
          <button
            className="dropdown-item"
            onClick={() => alert('Help Section Coming Soon!')} // Placeholder for Help logic
          >
            Help
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
