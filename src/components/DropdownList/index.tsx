import * as React from "react";
import DropdownOption from "../DropdownOption/index";
import SearchInput from "../SearchInput/index";
import styles from "./dropdownlist.module.css";

const DropdownList = () => {
  return (
    <div className={styles.dropdownlist__wrapper}>
      <div className={styles.dropdownlist__search}>
        <SearchInput />
      </div>
      <ul>
        <DropdownOption />
        <DropdownOption />
      </ul>
    </div>
  );
};

export default DropdownList;
