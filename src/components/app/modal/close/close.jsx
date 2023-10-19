import React from 'react'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './close.module.css'

function Close({onClose}) {
  return (
    <div className={styles.close} onClick={onClose}>
        <CloseIcon type="primary" />
    </div>
  )
}

export default Close