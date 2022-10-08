import React from "react";
import styles from "../../assets/stylesheets/components/message.module.css";

export default function Message({ content, success }) {
  return (
    <div
      className={`row ${styles.box} ${success ? styles.success : styles.error}`}
    >
      <h3>{content}</h3>
    </div>
  );
}
