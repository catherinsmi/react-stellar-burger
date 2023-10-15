import BurgerComponents from './burger-components/burger-components.jsx'
import PriceTag from './price-tag/price-tag.jsx'
import OrderButton from './order-button/order-button.jsx'
import styles from './burger-constructor.module.css'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../utils/prop-types'

function BurgerConstructor({ingredients, setModalActive}) {
    return (
        <section className={styles.section}>
            <BurgerComponents ingredients={ingredients} />
            <div className={styles['order-block']}>
                <PriceTag />
                <OrderButton setModalActive={setModalActive} />
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired),
    setModalActive: PropTypes.func
}

export default BurgerConstructor