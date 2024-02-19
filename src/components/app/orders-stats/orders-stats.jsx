import React from 'react';
import styles from './orders-stats.module.css';

export default function OrdersStats() {
  return (
    <section className={styles.section}>
      <div className={styles.progress}>
        <div className={styles.done}>
          <p className={styles.title}>Готовы:</p>
          <div></div>
        </div>
        <div className={styles.inwork}>
          <p className={styles.title}>В работе:</p>
          <div></div>
        </div>
      </div>
      <div className={styles.completed}>
        <p className={styles.title}>Выполнено за все время:</p>
        <p className={styles.numbers}>28 752</p>
      </div>
      <div className={styles.completed}>
        <p className={styles.title}>Выполнено за сегодня:</p>
        <p className={styles.numbers}>138</p>
      </div>
    </section>
  );
}
