import React from "react";
import PropTypes from "prop-types";
import styles from "../../assets/stylesheets/components/model-info.module.css";

function CourseInfo({ data }) {
  return (
    <div className={`row ${styles.flex_row}`}>
      <div className={styles.model_info}>
        <h3>
          <span>Name: </span>
          {data.name}
        </h3>
        <h3>
          <span>Teacher: </span>
          {data.teacher_name}
        </h3>
      </div>
      <button className={`${styles.button} ${styles.button_main}`}>
        Enroll new student
      </button>
    </div>
  );
}

CourseInfo.prototypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    teacher_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseInfo;
