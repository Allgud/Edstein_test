import Arrow from '../../assets/svg/arrow.svg?react'
import { SelectProps } from '../../types'
import SelectedItem from '../SelectedItem'
import styles from './select.module.css'
import cn from 'classnames/bind'

const cnBind = cn.bind(styles)

const Select = ({ open, openHandler }: SelectProps) => {
  return (
    <div className={styles.select__wrapper}>
      <ul className={styles.selected__list}>
        <SelectedItem text='Английский' />
        <SelectedItem text='Английский' />
      </ul>
      <Arrow className={cnBind(styles.arrow__icon, { arrow__icon_rotated: open })} onClick={() => openHandler(!open)} />
    </div>
  )
}

export default Select