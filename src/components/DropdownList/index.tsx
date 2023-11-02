import * as React from "react";
import DropdownOption from "../DropdownOption/index";
import { DropdownListProps } from "../../types/index";
import { useDropdownContext } from "../../hooks/useDropdownContext";
import SearchInput from "../SearchInput/index";
import styles from "./dropdownlist.module.css";
import cn from 'classnames/bind'

const cnBind = cn.bind(styles)

const DropdownList = ({ flagsVisible, multiple }: DropdownListProps) => {
  const { renderOptions, searchValue, handleSearch } = useDropdownContext();

  return (
    <div className={styles.dropdownlist__wrapper}>
      <div className={cnBind(styles.dropdownlist__search, { dropdownlist__search_empty: !renderOptions.length })}>
        <SearchInput searchValue={searchValue} handleChange={handleSearch} />
      </div>
      <ul>
        {renderOptions.length
          ? (renderOptions.map((option) => (
            <DropdownOption
              key={option.id}
              title={option.title}
              flag_icon={flagsVisible ? option.flag_icon : ""}
              value={option.value}
              checked={option.checked}
              multiple={multiple}
            />
          )))
          : (<div className={styles.nomatches__notification}>Нет совпадений</div>)
        }
      </ul>
    </div>
  );
};

export default DropdownList;
