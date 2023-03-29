import React from "react";
import styles from "./Reviewer.module.css";
function Reviewer({ userName, fromWhere }) {
  return (
    <div className={styles.user}>
      <img
        className={styles.user_img}
        src={require("../../assets/customer_darika.png")}
        alt="Darika"
      />
      <div className={styles.user_name_from}>
        <p className={styles.user_name}>{userName}</p>
        <p className={styles.user_from}>{fromWhere}</p>
      </div>
    </div>
  );
}

export default Reviewer;
