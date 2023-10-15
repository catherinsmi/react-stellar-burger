import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'
import PropTypes from 'prop-types'

function Card({sauce, openPopupIngredient}) {

    return (
        <div onClick={()=> openPopupIngredient(sauce)} className={styles.card}>
            <img src={sauce.image} alt={sauce.name} className={styles.img} />
            <span className={styles['price-tag']}>
                <p className={styles.price}>{sauce.price}</p>
                <CurrencyIcon type="primary" />
            </span>
            <h3 className={styles.name}>{sauce.name}</h3>
        </div>
    )
}

Card.propTypes = {
    sauce: PropTypes.object.isRequired,
    openPopupIngredient: PropTypes.func
}

export default Card