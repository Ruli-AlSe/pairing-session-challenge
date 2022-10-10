import React from "react";
import styles from "../../assets/stylesheets/components/notification-popup.module.css";

export default function NotificationPopup({
  handleAcceptClick,
  handleCancelClick,
}) {
  return (
    <div className={styles.background_popup}>
      <div className={styles.popup}>
        <div className={styles.container}>
          <h4>Are you sure?</h4>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_info}`}
              onClick={(event) => handleCancelClick(event)}
            >
              Cancel
            </button>
            <button
              className={`${styles.button} ${styles.button_danger}`}
              onClick={(event) => handleAcceptClick(event)}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
