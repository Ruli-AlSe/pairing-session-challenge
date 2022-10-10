import React, { useState, useEffect } from "react";
import { fetchApi } from "../utils/fetchApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetFetch } from "../utils/hooks/useGetFetch";
import Loading from "../components/Loading";
import Message from "../components/Message";
import styles from "../../assets/stylesheets/pages/student-actions.module.css";

export default function StudentActions() {
  const navigate = useNavigate();
  const { id } = useParams();
  const title = id ? "Edit student" : "Create new student";
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState({ success: false, content: "" });
  const [isLoading, setIsLoading] = useState(true);
  const student = id
    ? useGetFetch({ url: `/api/v1/students/show/${id}` })
    : {
        data: { name: "", surname: "", country: "" },
        isLoading: false,
        response: {},
      };
  const [result, setResult] = useState({
    data: [],
    isLoading: false,
    response: {},
  });
  const [newStudentData, setNewStudentData] = useState({
    name: "",
    surname: "",
    country: "",
  });

  function onChange(event) {
    setNewStudentData({
      ...newStudentData,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const apiUrl = id
      ? `/api/v1/students/update/${id}`
      : "/api/v1/students/create";
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
      body: JSON.stringify(newStudentData),
      signal: controller.signal,
    };

    if (
      newStudentData.name.length == 0 ||
      newStudentData.surname.length == 0 ||
      newStudentData.country.length == 0
    )
      return;

    fetchApi(apiUrl, setResult, postParams);
    setShowMessage(true);
  }

  useEffect(() => {
    setMessage({ success: result.response.ok, content: result.data.message });

    if (!student.isLoading && !result.isLoading) {
      setNewStudentData(student.data);
      setIsLoading(false);
    }

    if (result.response.status == 200) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [result.isLoading, student.isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className={styles.form_container}>
          <h1 className={styles.title}>{title}</h1>
          <form onSubmit={onSubmit}>
            <div className={styles.group}>
              <label htmlFor="studentName">Student name</label>
              <input
                type="text"
                name="name"
                id="studentName"
                className={styles.input}
                required
                onChange={onChange}
                value={newStudentData.name}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="studentSurname">Surname</label>
              <input
                type="text"
                name="surname"
                id="studentSurname"
                className={styles.input}
                required
                onChange={onChange}
                value={newStudentData.surname}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="country">Country</label>
              <input
                className={styles.input}
                id="country"
                name="country"
                required
                onChange={onChange}
                value={newStudentData.country}
              />
            </div>
            <div className={styles.buttons_group}>
              <button
                type="submit"
                className={`${styles.button} ${styles.button_main}`}
              >
                Save student
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
