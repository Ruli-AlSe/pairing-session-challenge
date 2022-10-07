import React, { useEffect, useState } from "react";
import { useFetch } from "../api/hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";
import Message from "../components/Message";
import styles from "../../assets/stylesheets/pages/view-enrollments.module.css";

export default function ViewEnrollments() {
  let { id } = useParams();
  const enrollments = useFetch(`/api/v1/students/enrollments/${id}`);
  const student = useFetch(`/api/v1/students/show/${id}`);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enrollments.isLoading && !student.isLoading) {
      setIsLoading(false);
    }
  }, [enrollments.isLoading, student.isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="enrollments_container">
          <div className={`row ${styles.flex_row}`}>
            <div className={styles.student_info}>
              <h3>
                <span>Name: </span>
                {`${student.data.name} ${student.data.surname}`}
              </h3>
              <h3>
                <span>Location: </span>
                {student.data.country}
              </h3>
            </div>
            <button className={`${styles.button} ${styles.button_main}`}>
              Enroll new course
            </button>
          </div>
          {enrollments.data.length > 0 ? (
            <Table
              title="Courses enrolled"
              info={enrollments.data}
              model="course"
            />
          ) : (
            <Message />
          )}
        </div>
      )}
    </>
  );
}