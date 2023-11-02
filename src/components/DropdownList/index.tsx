import * as React from "react";
import DropdownOption from "../DropdownOption/index";
import { DropdownListProps } from "../../types/index";
import { useDropdownContext } from "../../hooks/useDropdownContext";
import SearchInput from "../SearchInput/index";
import styles from "./dropdownlist.module.css";

const DropdownList = ({ flagsVisible, multiple }: DropdownListProps) => {
  const { renderOptions, searchValue, handleSearch } = useDropdownContext();

  return (
    <div className={styles.dropdownlist__wrapper}>
      <div className={styles.dropdownlist__search}>
        <SearchInput searchValue={searchValue} handleChange={handleSearch} />
      </div>
      <ul>
        {renderOptions.map((option) => (
          <DropdownOption
            key={option.id}
            title={option.title}
            flag_icon={flagsVisible ? option.flag_icon : ""}
            value={option.value}
            checked={option.checked}
            multiple={multiple}
          />
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
