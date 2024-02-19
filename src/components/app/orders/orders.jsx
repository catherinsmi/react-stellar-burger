import React from 'react';
import OrderCard from './order-card/order-card';
import styles from './orders.module.css';

export default function Orders() {
  return (
    <div className={styles['scroll-block']}>
      <OrderCard />
    </div>
  );
}
