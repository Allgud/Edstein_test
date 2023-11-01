import React from "react";
import CheckIcon from '../../assets/svg/ok.svg?react'
import { CheckboxProps } from "../../types";
import styles from "./checkbox.module.css";
import cn from 'classnames/bind'

const cnBind = cn.bind(styles)

const Checkbox = ({ id, value, checked, onChange }: CheckboxProps) => {

  return (
    <label htmlFor={id} className={styles.checkbox__label}>
      <div className={cnBind(styles.checkbox__indicator, { checkbox__indicator_checked: checked })}>
        <CheckIcon className={cnBind(styles.icon__defalt, { icon__visible: checked })} />
      </div>
      <input
        type="checkbox"
        className={styles.checkbox__input}
        id={id}
        value={value}
        checked={checked}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </label>
  );
};

export default Checkbox;
