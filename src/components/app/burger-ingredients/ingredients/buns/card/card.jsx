import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'
import PropTypes from 'prop-types'

function Card({bun, openPopupIngredient}) {

    return (
        <div onClick={()=> openPopupIngredient(bun)} className={styles.card}>
            <img src={bun.image} alt={bun.name} className={styles.img} />
            <span className={styles['price-tag']}>
                <p className={styles.price}>{bun.price}</p>
                <CurrencyIcon type="primary" />
            </span>
            <h3 className={styles.name}>{bun.name}</h3>
        </div>
    )
}

Card.propTypes = {
    bun: PropTypes.object.isRequired,
    openPopupIngredient: PropTypes.func
}


export default Card