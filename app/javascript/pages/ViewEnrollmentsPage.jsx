import React, { useEffect, useState } from "react";
import { useFetch } from "../api/hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";

export default function ViewEnrollments() {
  let { id } = useParams();
  const student = useFetch(`/api/v1/students/enrollments/${id}`);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!student.isLoading) {
      setIsLoading(false);
    }
  }, [student.isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="enrollments_container">
          <Table title="Courses enrolled" info={student.data} model="student" />
        </div>
      )}
    </>
  );
}
