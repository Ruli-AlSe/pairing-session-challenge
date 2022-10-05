import React, { useEffect, useState } from "react";
import fetchApi from "../api/FetchApi";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = "/api/v1/courses/index";
    const controller = new AbortController();
    fetchApi.get(url, setCourses, controller);

    return () => {
      controller.abort();
    };
  }, []);

  const allCourses = courses.map((course) => (
    <div key={course.id}>
      <p>{course.name}</p>
    </div>
  ));

  return <>{allCourses}</>;
}