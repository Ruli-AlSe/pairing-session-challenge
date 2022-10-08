import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HeaderComponent from "../components/Header";
import ViewEnrollments from "../pages/ViewEnrollmentsPage";
import StudentActions from "../pages/StudentActionsPage";

export default function RoutesSelector() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-student-courses/:id" element={<ViewEnrollments />} />
        <Route path="/create-student" element={<StudentActions />} />
        <Route path="/edit-student/:id" element={<StudentActions />} />
      </Routes>
    </Router>
  );
}
