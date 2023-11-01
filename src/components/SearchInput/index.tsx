import React from "react";
import { SearchInputProps } from "../../types";
import styles from "./searchinput.module.css";

const SearchInput = ({ searchValue, handleChange }: SearchInputProps) => {
  return (
    <div className={styles.search__wrapper}>
      <input
        type="text"
        className={styles.search__input}
        placeholder="Поиск"
        value={searchValue}
        onChange={(evt) => handleChange(evt.target.value)} />
    </div>
  );
};

export default SearchInput;
