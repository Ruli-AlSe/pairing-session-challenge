import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetFetch } from "../utils/hooks/useGetFetch";
import { fetchApi } from "../utils/fetchApi";
import Loading from "../components/Loading";
import Table from "../components/Table";
import Message from "../components/Message";
import NotificationPopup from "../components/NotificationPopup";
import {
  COURSES_INDEX,
  COURSE_DESTROY,
  STUDENTS_INDEX,
  STUDENT_DESTROY,
} from "../utils/Constants";

export default function Home() {
  const students = useGetFetch({ url: STUDENTS_INDEX });
  const courses = useGetFetch({ url: COURSES_INDEX });
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [rowToRemove, setRowToRemove] = useState({ id: null, model: null });
  const [result, setResult] = useState({
    data: [],
    isLoading: false,
    response: {},
  });
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState({ success: false, content: "" });

  function onDelete({ id = null, model = null }) {
    if (!id) return;
    if (!model) return;

    setIsLoading(true);
    const apiUrl = {
      student: STUDENT_DESTROY + id,
      course: COURSE_DESTROY + id,
    };
    const controller = new AbortController();
    const deleteParams = {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      signal: controller.signal,
    };

    fetchApi(apiUrl[model], setResult, deleteParams);

    setShowPopup(false);
    setShowMessage(true);
  }

  function disableScroll() {
    window.scrollTo(0, 0);
  }

  function handleAcceptClick(event) {
    event.preventDefault();
    window.removeEventListener("scroll", disableScroll);
    onDelete(rowToRemove);
  }

  function handleCancelClick(event) {
    event.preventDefault();
    setShowPopup(false);
    window.location.reload(false);
  }

  useEffect(() => {
    setMessage({ success: result.response.ok, content: result.data.message });

    if (!students.isLoading && !courses.isLoading && !result.isLoading) {
      setIsLoading(false);
    }

    if (result.response.status == 200) {
      setTimeout(() => {
        setShowMessage(false);
        window.location.reload(false);
      }, 2000);
    }
  }, [students.isLoading, courses.isLoading, result.isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="home_container">
          {showPopup && (
            <NotificationPopup
              handleAcceptClick={handleAcceptClick}
              handleCancelClick={handleCancelClick}
            />
          )}
          {showMessage && (
            <Message content={message.content} success={message.success} />
          )}
          <Table
            title="Students table"
            info={students.data}
            model="student"
            setRowToRemove={setRowToRemove}
            setShowPopup={setShowPopup}
            disableScroll={disableScroll}
            withEditInfo={true}
          />
          <Table
            title="Courses table"
            info={courses.data}
            model="course"
            setRowToRemove={setRowToRemove}
            setShowPopup={setShowPopup}
            disableScroll={disableScroll}
            withEditInfo={true}
          />
        </div>
      )}
    </>
  );
}
