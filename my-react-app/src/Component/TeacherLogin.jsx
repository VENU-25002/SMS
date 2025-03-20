import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './TeacherLogin.css'; // Import the CSS file for styling

const TeacherLogin = () => {
  const [email, setEmail] = useState(''); // State to track email input
  const [password, setPassword] = useState(''); // State to track password input
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here (API or validation)
    console.log('Teacher Logged In:', { email, password });

    // Navigate to the teacher dashboard after successful login
    navigate('/teacher-dashboard');
  };

  return (
    <div className="teacher-login-container">
      <h1>Teacher Login</h1>
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

export default TeacherLogin;
