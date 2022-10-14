import React from "react";
import PropTypes from "prop-types";
import styles from "../../assets/stylesheets/components/message.module.css";

function Message({ content, success }) {
  return (
    <div
      className={`row ${styles.box} ${success ? styles.success : styles.error}`}
    >
      <h3>{content}</h3>
    </div>
  );
}

Message.prototypes = {
  content: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default Message;
