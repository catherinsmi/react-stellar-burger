import React from 'react'
import styles from './order-details.module.css'
import  doneImage  from '../../../images/done.svg'

function OrderDetails({fetchedOrderNumber}) {
  return (
    <div className={styles.content}>
        <h3 className={styles['order-number']}>{fetchedOrderNumber}</h3>
        <p className={styles.identificator}>идентификатор заказа</p>
        <img src={doneImage} className={styles.image} />
        <p className={styles.status} >Ваш заказ начали готовить</p>
        <p className={styles.instruction} >Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails
