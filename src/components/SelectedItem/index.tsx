import React from 'react'
import CloseBtn from '../../assets/svg/cross.svg?react'
import { SelectedItemProps } from '../../types'
import styles from './selected-item.module.css'

const SelectedItem = ({ text, onRemoveClick }: SelectedItemProps) => {
  return (
    <li className={styles.item__wrapper} >
      <span className={styles.item__text}>{text}</span>
      <CloseBtn className={styles.close__icon} onClick={(evt) => onRemoveClick(evt, text)} />
    </li>
  )
}

export default SelectedItem