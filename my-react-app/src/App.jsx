import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home"; // Import the Home component
import StudentDashboard from "./Component/StudentDashboard"; // Import the StudentDashboard component
import Navbar from "./Component/Navbar"; // Import the Navbar component
import SignIn from "./Component/SignIn"; // Import the SignIn page/component
import ChooseUser from "./Component/ChooseUser"; // Import the ChooseUser component

function App() {
  return (
    <Router>
      {/* Include Navbar */}
      

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Route for Student Dashboard */}
        <Route path="/signin" element={<SignIn />} /> {/* Route for Sign In */}
        <Route path="/choose-user" element={<ChooseUser />} /> {/* Route for ChooseUser */}
      </Routes>
    </Router>
  );
}

export default App;
