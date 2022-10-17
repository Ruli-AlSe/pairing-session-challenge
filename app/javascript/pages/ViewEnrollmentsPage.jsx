import React, { useEffect, useState } from "react";
import { useGetFetch } from "../utils/hooks/useGetFetch";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";
import Message from "../components/Message";
import StudentInfo from "../components/StudentInfo";
import CourseInfo from "../components/CourseInfo";
import PropTypes from "prop-types";
import {
  STUDENT_ENROLLMENTS,
  STUDENT_SHOW,
  COURSE_ENROLLMENTS,
  COURSE_SHOW,
} from "../utils/Constants";

function ViewEnrollments({ model }) {
  let { id } = useParams();
  const enrollmentsUrl =
    model == "student" ? STUDENT_ENROLLMENTS + id : COURSE_ENROLLMENTS + id;
  const enrollments = useGetFetch({ url: enrollmentsUrl });
  const modelInfoUrl =
    model == "student" ? STUDENT_SHOW + id : COURSE_SHOW + id;
  const information = useGetFetch({ url: modelInfoUrl });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enrollments.isLoading && !information.isLoading) {
      setIsLoading(false);
    }
  }, [enrollments.isLoading, information.isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && information.response.ok && (
        <div className="enrollments_container">
          {model == "student" ? (
            <StudentInfo data={information.data} />
          ) : (
            <CourseInfo data={information.data} />
          )}
          {enrollments.data.length > 0 ? (
            <Table
              title={
                model === "student" ? "Courses enrolled" : "Students enrolled"
              }
              info={enrollments.data}
              model="course"
            />
          ) : model == "student" ? (
            <Message success={false} content={"No courses enrolled yet"} />
          ) : (
            <Message success={false} content={"No students enrolled yet"} />
          )}
        </div>
      )}
      {!isLoading && !information.response.ok && (
        <Message
          success={information.response.ok}
          content={information.data.message}
        />
      )}
    </>
  );
}

ViewEnrollments.prototypes = {
  model: PropTypes.string.isRequired,
};

export default ViewEnrollments;
