import React from "react";
import PropTypes from "prop-types";
import styles from "../../assets/stylesheets/components/notification-popup.module.css";

function NotificationPopup({ handleAcceptClick, handleCancelClick }) {
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

NotificationPopup.prototypes = {
  handleAcceptClick: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};

export default NotificationPopup;
