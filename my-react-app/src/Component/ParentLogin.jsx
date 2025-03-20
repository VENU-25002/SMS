import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './ParentLogin.css'; // CSS file for styling

const ParentLogin = () => {
  const [email, setEmail] = useState(''); // Track email input
  const [password, setPassword] = useState(''); // Track password input
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication for demonstration (replace with API logic)
    if (email === 'parent@example.com' && password === 'parent123') {
      console.log('Parent Logged In:', { email });
      navigate('/parent-portal'); // Navigate to parent portal
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="parent-login-container">
      <h1>Parent Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default ParentLogin;
