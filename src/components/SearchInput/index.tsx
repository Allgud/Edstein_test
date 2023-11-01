import React from "react";
import styles from "./searchinput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.search__wrapper}>
      <input type="text" className={styles.search__input} placeholder="Поиск" />
    </div>
  );
};

export default SearchInput;
