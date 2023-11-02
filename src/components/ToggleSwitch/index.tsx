import * as React from "react";
import { ToggleSwitchProps } from "../../types/index";
import styles from "./toggle-switch.module.css";

const ToggleSwitch = ({
  label,
  id,
  value,
  checked,
  onChange,
}: ToggleSwitchProps) => {
  return (
    <label htmlFor={id} className={styles.switch__label}>
      {label}
      <input
        type="checkbox"
        className={styles.switch__input}
        id={id}
        checked={checked}
        onChange={(evt) => onChange(evt.target.value)}
        value={value}
      />
      <div className={styles.switch__slider}></div>
    </label>
  );
};

export default ToggleSwitch;
