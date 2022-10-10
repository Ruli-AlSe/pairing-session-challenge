import React, { useState, useEffect } from "react";
import { fetchApi } from "../utils/fetchApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetFetch } from "../utils/hooks/useGetFetch";
import Loading from "../components/Loading";
import Message from "../components/Message";
import styles from "../../assets/stylesheets/pages/student-actions.module.css";

export default function CourseActions() {
  const navigate = useNavigate();
  const { id } = useParams();
  const title = id ? "Edit course" : "Create new course";
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState({ success: false, content: "" });
  const [isLoading, setIsLoading] = useState(true);
  const course = id
    ? useGetFetch({ url: `/api/v1/courses/show/${id}` })
    : {
        data: { name: "", teacher_name: "" },
        isLoading: false,
        response: {},
      };
  const [result, setResult] = useState({
    data: [],
    isLoading: false,
    response: {},
  });
  const [newCourseData, setNewCourseData] = useState({
    name: "",
    teacher_name: "",
  });

  function onChange(event) {
    setNewCourseData({
      ...newCourseData,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const apiUrl = id
      ? `/api/v1/courses/update/${id}`
      : "/api/v1/courses/create";
    const controller = new AbortController();
    const postParams = {
      method: id ? "PUT" : "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newCourseData),
      signal: controller.signal,
    };

    if (
      newCourseData.name.length == 0 ||
      newCourseData.teacher_name.length == 0
    )
      return;

    fetchApi(apiUrl, setResult, postParams);
    setShowMessage(true);
  }

  useEffect(() => {
    setMessage({ success: result.response.ok, content: result.data.message });

    if (!course.isLoading && !result.isLoading) {
      setNewCourseData(course.data);
      setIsLoading(false);
    }

    if (result.response.status == 200) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [result.isLoading, course.isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className={styles.form_container}>
          <h1 className={styles.title}>{title}</h1>
          <form onSubmit={onSubmit}>
            <div className={styles.group}>
              <label htmlFor="courseName">Course name</label>
              <input
                type="text"
                name="name"
                id="courseName"
                className={styles.input}
                required
                onChange={onChange}
                value={newCourseData.name}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="courseTeacher">Teacher name</label>
              <input
                type="text"
                name="teacher_name"
                id="courseTeacher"
                className={styles.input}
                required
                onChange={onChange}
                value={newCourseData.teacher_name}
              />
            </div>
            <div className={styles.buttons_group}>
              <button
                type="submit"
                className={`${styles.button} ${styles.button_main}`}
              >
                Save course
              </button>
              <Link to="/" className={`${styles.button} ${styles.button_info}`}>
                Back to homepage
              </Link>
            </div>
          </form>
          {showMessage && (
            <Message content={message.content} success={message.success} />
          )}
        </div>
      )}
    </>
  );
}
