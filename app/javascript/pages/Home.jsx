import React, { useEffect, useState } from "react";
import { useGetFetch } from "../api/hooks/useGetFetch";
import Loading from "../components/Loading";
import Table from "../components/Table";

export default function Home() {
  const students = useGetFetch({ url: "/api/v1/students/index" });
  const courses = useGetFetch({ url: "/api/v1/courses/index" });
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
