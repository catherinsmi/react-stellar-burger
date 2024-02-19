import React from 'react';
import OrdersStats from '../../../components/app/orders-stats/orders-stats';
import Orders from '../../../components/app/orders/orders';
import styles from './order-feed.module.css';

export default function OrderFeed() {
  return (
    <div className={styles.wrappper}>
      <h1>Лента заказов</h1>
      <div className={styles['two-columns']}>
        <Orders />
        <OrdersStats />
      </div>
    </div>
  );
}
