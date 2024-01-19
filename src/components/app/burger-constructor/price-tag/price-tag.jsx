import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './price-tag.module.css'
import { useSelector } from 'react-redux';

function PriceTag() {
    const totalPrice = useSelector(state => state.burgstructor.totalPrice);
    
    return (
        <span className={styles['price-tag']}>
            <p className={styles.price}>{totalPrice}</p>
            <CurrencyIcon type="primary" />
        </span> 
    )
}

export default PriceTag