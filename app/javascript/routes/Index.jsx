import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HeaderComponent from "../components/Header";
import ViewEnrollments from "../pages/ViewEnrollmentsPage";

export default function RoutesSelector() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-student-courses/:id" element={<ViewEnrollments />} />
      </Routes>
    </Router>
  );
}
