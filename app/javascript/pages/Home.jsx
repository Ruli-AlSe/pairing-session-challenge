import React, { useEffect, useState } from "react";
import { useFetch } from "../api/hooks/useFetch";
import Loading from "../components/Loading";
import Table from "../components/Table";

export default function Home() {
  const students = useFetch("/api/v1/students/index");
  const courses = useFetch("/api/v1/courses/index");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!students.isLoading && !courses.isLoading) {
      setIsLoading(false);
    }
  }, [students.isLoading, courses.isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="home_container">
          <Table title="Students table" info={students.data} model="student" />
          <Table title="Courses table" info={courses.data} model="course" />
        </div>
      )}
    </>
  );
}
