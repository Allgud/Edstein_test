import React from "react";
import { useDropdownContext } from "../../hooks/useDropdownContext";
import { IOption } from "../../types";
import Checkbox from "../Checkbox/index";
import styles from "./dropdown-option.module.css";

const DropdownOption = ({ title, flag_icon, value, checked }: IOption) => {
  const { handleChange } = useDropdownContext()

  return (
    <li className={styles.option__wrapper}>
      <div className={styles.option__left}>
        <img src={flag_icon} alt="" />
        <span className={styles.left__text}>{title}</span>
      </div>
      <div className={styles.option__right}>
        <Checkbox value={value} id={value} checked={checked} onChange={handleChange} />
      </div>

    </li>
  );
};

export default DropdownOption;
