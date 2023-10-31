import Select from '../Select'
import { useDropdown } from '../../hooks/useDropdown'
import styles from './dropdown.module.css'

const Dropdown = () => {
  const { isOpen, handleOpen } = useDropdown()

  return (<div className={styles.dropdown__wrapper}>
    <div className={styles.dropdown__top}>
      <h6 className={styles.top__title}>Язык</h6>
      <Select open={isOpen} openHandler={handleOpen} />
    </div>
  </div>)
}

export default Dropdown