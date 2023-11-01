import * as React from "react";
import styles from "./checkbox.module.css";

const Checkbox = () => {
  return (
    <label htmlFor="" className={styles.checkbox__label}>
      <input type="checkbox" className={styles.checkbox__input} id="" />
      <div className={styles.checkbox__indicator} />
    </label>
  );
};

export default Checkbox;
