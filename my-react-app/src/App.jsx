import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import StudentDashboard from "./Component/StudentDashboard";
import Navbar from "./Component/Navbar";
import ChooseUser from "./Component/ChooseUser";
import StudentLogin from "./Component/StudentLogin";
import TeacherLogin from "./Component/TeacherLogin"; // Import TeacherLogin
import TeacherDashboard from "./Component/TeacherDashboard"; // Import TeacherDashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/choose-user" element={<ChooseUser />} /> {/* Route for ChooseUser */}
        <Route path="/student-login" element={<StudentLogin />} /> {/* Route for Student Login */}
        <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Route for Student Dashboard */}
        <Route path="/teacher-login" element={<TeacherLogin />} /> {/* Route for Teacher Login */}
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> {/* Route for Teacher Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
