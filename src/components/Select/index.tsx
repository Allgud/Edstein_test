import * as React from "react";
import Arrow from "../../assets/svg/arrow.svg?react";
import { useDropdownContext } from "../../hooks/useDropdownContext";
import { SelectProps } from "../../types";
import SelectedItem from "../SelectedItem";
import styles from "./select.module.css";
import cn from "classnames/bind";

const cnBind = cn.bind(styles);

const Select = ({ open, openHandler }: SelectProps) => {
  const { selectedOptions, handleRemove } = useDropdownContext();

  return (
    <div className={styles.select__wrapper} onClick={() => openHandler(!open)}>
      <ul className={styles.selected__list}>
        {
          !selectedOptions.length
          && <span className={styles.select__placeholder}>Выберите язык</span>
        }
        {selectedOptions.map((option) => (
          <SelectedItem
            key={option.id}
            text={option.title}
            onRemoveClick={handleRemove}
          />
        ))}
      </ul>
      <Arrow className={cnBind(styles.arrow__icon, { arrow__icon_rotated: open })} />
    </div>
  );
};

export default Select;
