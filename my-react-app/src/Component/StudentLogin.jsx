import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './StudentLogin.css'; // Import the CSS file for styling

const StudentLogin = () => {
  const [email, setEmail] = useState(''); // State to track email input
  const [password, setPassword] = useState(''); // State to track password input
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here (API or validation)
    console.log('Student Logged In:', { email, password });

    // Navigate to the student dashboard after successful login
    navigate('/student-dashboard');
  };

  return (
    <div className="student-login-container">
      <h1>Student Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
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
            name="password"
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

export default StudentLogin;
