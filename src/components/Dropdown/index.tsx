import * as React from "react";
import Select from "../Select/index";
import { useDropdown } from "../../hooks/useDropdown";
import styles from "./dropdown.module.css";
import DropdownList from "../DropdownList/index";

const Dropdown = () => {
  const { isOpen, handleOpen } = useDropdown();

  return (
    <div className={styles.dropdown__wrapper}>
      <div className={styles.dropdown__top}>
        <h6 className={styles.top__title}>Язык</h6>
        <Select open={isOpen} openHandler={handleOpen} />
        <DropdownList />
      </div>
    </div>
  );
};

export default Dropdown;
