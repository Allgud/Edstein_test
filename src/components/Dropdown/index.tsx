import * as React from "react";
import Select from "../Select/index";
import { useDropdown } from "../../hooks/useDropdown";
import styles from "./dropdown.module.css";
import DropdownList from "../DropdownList/index";
import ToggleSwitch from "../ToggleSwitch/index";

const Dropdown = () => {
  const { isOpen, handleOpen, isMultiple, withFlags, handleSwitch } =
    useDropdown();

  return (
    <div className={styles.dropdown__wrapper}>
      <div className={styles.dropdown__top}>
        <div className={styles.top__header}>
          <h6 className={styles.top__title}>Язык</h6>
          <div className={styles.header__switches}>
            <ToggleSwitch
              label="Мультиселект"
              id="multiple"
              value="multiple"
              checked={isMultiple}
              onChange={handleSwitch}
            />
            <ToggleSwitch
              label="Флажки"
              id="flags"
              value="flags"
              checked={withFlags}
              onChange={handleSwitch}
            />
          </div>
        </div>
        <Select open={isOpen} openHandler={handleOpen} />
        {isOpen && (
          <DropdownList flagsVisible={withFlags} multiple={isMultiple} />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
