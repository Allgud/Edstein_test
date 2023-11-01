import React from "react";
import DropdownOption from "../DropdownOption/index";
import { useDropdownContext } from "../../hooks/useDropdownContext";
import SearchInput from "../SearchInput/index";
import styles from "./dropdownlist.module.css";

const DropdownList = () => {
  const { options } = useDropdownContext()

  return (
    <div className={styles.dropdownlist__wrapper}>
      <div className={styles.dropdownlist__search}>
        <SearchInput />
      </div>
      <ul>
        {
          options.map(option => (
            <DropdownOption
              key={option.id}
              title={option.title}
              flag_icon={option.flag_icon}
              value={option.value}
              checked={option.checked}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default DropdownList;
