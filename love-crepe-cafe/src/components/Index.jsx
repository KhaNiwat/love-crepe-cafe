import React from "react";
import styles from "./Index.module.css";
export default function Index() {
  return (
    <div className={styles.mobile}>
      <div className={styles.lang}>
      <select className={styles.selectOption}>
        <option value="1">England</option>
        <option value="2">China</option>
        <option value="3">Thai</option>
        <option value="4">Korea</option>
      </select>
      </div>

      <div className={styles.footer}>
        <button className={styles.button}>Eat in</button> 
        <button className={styles.button}>Take away</button>
      </div>
    </div>
  );
}
