import BurgerComponents from './burger-components/burger-components.jsx'
import PriceTag from './price-tag/price-tag.jsx'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../utils/prop-types'

function BurgerConstructor({ingredients}) {
    return (
        <section className={styles.section}>
            <BurgerComponents ingredients={ingredients} />
            <div className={styles['order-block']}>
                <PriceTag />
                <Button htmlType="button" type="primary" size="medium">
                    Офрмить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired)
}

export default BurgerConstructor