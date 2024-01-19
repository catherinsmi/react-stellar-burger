import BurgerComponents from './burger-components/burger-components.jsx'
import PriceTag from './price-tag/price-tag.jsx'
import OrderButton from './order-button/order-button.jsx'
import styles from './burger-constructor.module.css'
import PropTypes from 'prop-types'


function BurgerConstructor({setModalActive}) {
    return (
        <section className={styles.section}>
            <BurgerComponents />
            <div className={styles['order-block']}>
                <PriceTag />
                <OrderButton setModalActive={setModalActive} />
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    setModalActive: PropTypes.func,
}

export default BurgerConstructor