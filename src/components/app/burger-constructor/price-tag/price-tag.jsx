import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './price-tag.module.css'

function PriceTag() {
    return (
        <span className={styles['price-tag']}>
            <p className={styles.price}>610</p>
            <CurrencyIcon type="primary" />
        </span>
    )
}

export default PriceTag