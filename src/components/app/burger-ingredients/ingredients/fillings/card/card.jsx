import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'

function Card({filling}) {

    return (
        <div className={styles.card}>
            <img src={filling.image} alt={filling.name} className={styles.img} />
            <span className={styles['price-tag']}>
                <p className={styles.price}>{filling.price}</p>
                <CurrencyIcon type="primary" />
            </span>
            <h3 className={styles.name}>{filling.name}</h3>
        </div>
    )
}

export default Card