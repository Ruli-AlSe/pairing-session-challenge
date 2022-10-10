import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import HeaderComponent from "../components/Header";
import ViewEnrollments from "../pages/ViewEnrollmentsPage";
import StudentActions from "../pages/StudentActionsPage";
import CourseActions from "../pages/CourseActionsPage";

export default function RoutesSelector() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/view-student-courses/:id"
          element={<ViewEnrollments model={"student"} />}
        />
        <Route
          path="/view-course-students/:id"
          element={<ViewEnrollments model={"course"} />}
        />
        <Route path="/create-student" element={<StudentActions />} />
        <Route path="/edit-student/:id" element={<StudentActions />} />
        <Route path="/create-course" element={<CourseActions />} />
        <Route path="/edit-course/:id" element={<CourseActions />} />
      </Routes>
    </Router>
  );
}
