import CloseBtn from '../../assets/svg/cross.svg?react'
import { SelectedItemProps } from '../../types'
import styles from './selected-item.module.css'

const SelectedItem = ({ text }: SelectedItemProps) => {
  return (
    <li className={styles.item__wrapper}>
      <span className={styles.item__text}>{text}</span>
      <CloseBtn className={styles.close__icon} />
    </li>
  )
}

export default SelectedItem