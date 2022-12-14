import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../assets/stylesheets/components/table.module.css";

function Table({
  title,
  info,
  model,
  setRowToRemove,
  setShowPopup,
  disableScroll,
  withEditInfo,
}) {
  const notAllowed = ["id", "created_at", "updated_at"];
  const validKeys = Object.keys(info[0]).filter(
    (key) => !notAllowed.includes(key)
  );
  const colNamesFormated = validKeys.map((key, idx) => (
    <th key={`${key} ${idx}]`}>{key.replaceAll("_", " ").toUpperCase()}</th>
  ));

  const defaultActions = (elem) => (
    <>
      <li>
        <Link
          className={`${styles.button_small} ${styles.button_info}`}
          to={`/edit-${model}/${elem.id}`}
        >
          {`Edit ${model}`}
        </Link>
      </li>
      <li>
        <button
          className={`${styles.button_small} ${styles.button_danger}`}
          onClick={(event) => handleClick(event, elem.id, model)}
        >
          {`Remove ${model}`}
        </button>
      </li>
    </>
  );

  const viewModel = (elem) => {
    if (model === "student") {
      return (
        <li>
          <Link
            className={`${styles.button_small} ${styles.button_secondary}`}
            to={`/view-${model}-courses/${elem.id}`}
          >
            View courses
          </Link>
        </li>
      );
    }
    return (
      <li>
        <Link
          className={`${styles.button_small} ${styles.button_secondary}`}
          to={`/view-${model}-students/${elem.id}`}
        >
          View students
        </Link>
      </li>
    );
  };

  function handleClick(event, id, model) {
    event.preventDefault();
    window.scrollTo(0, 0);
    window.addEventListener("scroll", disableScroll);
    setRowToRemove({ id, model });
    setShowPopup(true);
  }

  const dataTable = info.map((elem) => (
    <tr key={`${model} ${elem.id}`}>
      {validKeys.map((keyname) => (
        <td key={keyname}>{elem[keyname]}</td>
      ))}
      <td>
        <ul>
          {withEditInfo && (
            <>
              {defaultActions(elem)}
              {viewModel(elem)}
            </>
          )}
          {!withEditInfo && <Link to="edit-grades">Edit Grades</Link>}
        </ul>
      </td>
    </tr>
  ));

  return (
    <div className={styles.table_container}>
      <div className={styles.header_ribbon}>
        <h3>{title}</h3>
        {withEditInfo && (
          <Link
            to={`/create-${model}`}
            className={`${styles.button} ${styles.button_main}`}
          >
            {`New ${model.charAt(0).toUpperCase() + model.slice(1)}`}
          </Link>
        )}
      </div>
      <table className={`${styles.table_white} ${styles.striped}`}>
        <thead>
          <tr>
            {colNamesFormated}
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{dataTable}</tbody>
      </table>
    </div>
  );
}

Table.prototypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  model: PropTypes.oneOf(["course", "student"]).isRequired,
  setRowToRemove: PropTypes.func.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  disableScroll: PropTypes.func.isRequired,
  withActions: PropTypes.bool,
};

export default Table;
