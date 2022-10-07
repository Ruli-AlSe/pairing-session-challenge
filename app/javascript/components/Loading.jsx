import React from "react";
import styles from "../../assets/stylesheets/components/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading_background}>
      <img
        src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
        alt="loading image"
        width="70px"
        height="70px"
      />
      <h3>Loading...</h3>
    </div>
  );
}
