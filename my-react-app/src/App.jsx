import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import StudentDashboard from "./Component/StudentDashboard";
import Navbar from "./Component/Navbar";
import ChooseUser from "./Component/ChooseUser";
import StudentLogin from "./Component/StudentLogin";
import TeacherLogin from "./Component/TeacherLogin"; // Import TeacherLogin
import TeacherDashboard from "./Component/TeacherDashboard"; // Import TeacherDashboard
import AdminDashboard from "./Component/AdminDashboard"; // Import AdminDashboard
import ParentLogin from "./Component/ParentLogin"; // Import ParentLogin
import ParentPortal from "./Component/ParentPortal"; // Import ParentPortal
import AdminLogin from "./Component/AdminLogin"; // Import AdminLogin
import SignUpPage from "./Component/SignUpPage"; // Import SignUpPage


function App() {
  return (
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/choose-user" element={<ChooseUser />} /> {/* Route for ChooseUser */}
        <Route path="/student-login" element={<StudentLogin />} /> {/* Route for Student Login */}
        <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Route for Student Dashboard */}
        <Route path="/teacher-login" element={<TeacherLogin />} /> {/* Route for Teacher Login */}
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> {/* Route for Teacher Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Route for Admin Dashboard */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* New Routes for Parent Portal */}
        <Route path="/parent-login" element={<ParentLogin />} /> {/* Parent Login */}
        <Route path="/parent-portal" element={<ParentPortal />} /> {/* Parent Portal */}

        {/* Additional Routes */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Route for Sign Up Page */}
        <Route path="/home" element={<Home />} /> {/* Route for Home */}
      </Routes>
    </Router>
  );
}

export default App;
