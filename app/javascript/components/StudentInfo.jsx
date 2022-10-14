import React from "react";
import PropTypes from "prop-types";
import styles from "../../assets/stylesheets/components/model-info.module.css";

function StudentInfo({ data }) {
  return (
    <div className={`row ${styles.flex_row}`}>
      <div className={styles.model_info}>
        <h3>
          <span>Name: </span>
          {`${data.name} ${data.surname}`}
        </h3>
        <h3>
          <span>Location: </span>
          {data.country}
        </h3>
      </div>
      <button className={`${styles.button} ${styles.button_main}`}>
        Enroll new course
      </button>
    </div>
  );
}

StudentInfo.prototypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentInfo;
