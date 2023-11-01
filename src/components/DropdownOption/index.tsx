import * as React from "react";
import Flag from "../../assets/flags/russia.svg";
import Checkbox from "../Checkbox/index";
import styles from "./dropdown-option.module.css";

const DropdownOption = () => {
  return (
    <li className={styles.option__wrapper}>
      <div className={styles.option__left}>
        <img src={Flag} alt="ru" />
        <span className={styles.left__text}>Русский</span>
      </div>
      <Checkbox />
    </li>
  );
};

export default DropdownOption;
