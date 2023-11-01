import React from 'react'
import Arrow from '../../assets/svg/arrow.svg?react'
import { useDropdownContext } from '../../hooks/useDropdownContext'
import { SelectProps } from '../../types'
import SelectedItem from '../SelectedItem'
import styles from './select.module.css'
import cn from 'classnames/bind'

const cnBind = cn.bind(styles)

const Select = ({ open, openHandler }: SelectProps) => {
  const { options, handleRemove } = useDropdownContext()

  return (
    <div className={styles.select__wrapper}>
      <ul className={styles.selected__list}>
        {
          options
            .filter(el => Boolean(el.checked))
            .map(option => (
              <SelectedItem key={option.id} text={option.title} onRemoveClick={handleRemove} />
            ))
        }
      </ul>
      <Arrow className={cnBind(styles.arrow__icon, { arrow__icon_rotated: open })} onClick={() => openHandler(!open)} />
    </div>
  )
}

export default Select