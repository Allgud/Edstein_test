import React from 'react'
import Dropdown from '../Dropdown'
import styles from './app.module.css'
import DropdownProvider from '../../context/DropdownProvider'

const App = () => {
  return (
    <div className={styles.app__wrapper}>
      <DropdownProvider>
        <Dropdown />
      </DropdownProvider>

    </div>
  )
}

export default App
