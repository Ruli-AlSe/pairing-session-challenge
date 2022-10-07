import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/stylesheets/components/header.module.css";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvrO6uVRxAH-1WUmkTkw8E1_C9rTXS_nK4Q&usqp=CAU"
          alt="Brand logo"
        />
        <h2>Grading App</h2>
      </Link>
      <div className={styles.links_container}>
        <Link to="/sign_in">Sign In</Link>
        <Link to="/sign_up">Sign Up</Link>
      </div>
    </header>
  );
}
