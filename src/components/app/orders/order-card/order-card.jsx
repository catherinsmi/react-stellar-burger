import React from 'react';
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation, Link } from 'react-router-dom';

export default function OrderCard() {
  const location = useLocation();
  const number = 1;
  return (
    <Link className={styles.link} to={`/profile/orders/${number}`} state={{ background: location }}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.number}>#034535</h3>
          <p className={styles.data}>Сегодня, 16:20 i-GMT+3</p>
        </div>
        <h2 className={styles.title}> Death Star Starship Main бургер</h2>
        <div className={styles.info}>
          <div></div>
          <span className={styles['price-tag']}>
            <p className={styles.price}>450</p>
            <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>
    </Link>
  );
}
