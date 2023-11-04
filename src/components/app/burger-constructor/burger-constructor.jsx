import BurgerComponents from './burger-components/burger-components.jsx'
import PriceTag from './price-tag/price-tag.jsx'
import OrderButton from './order-button/order-button.jsx'
import styles from './burger-constructor.module.css'
import PropTypes from 'prop-types'


function BurgerConstructor({setModalActive, sendOrder}) {
    return (
        <section className={styles.section}>
            <BurgerComponents />
            <div className={styles['order-block']}>
                <PriceTag />
                <OrderButton setModalActive={setModalActive} sendOrder={sendOrder} />
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    setModalActive: PropTypes.func,
    sendOrder: PropTypes.func.isRequired
}

export default BurgerConstructor