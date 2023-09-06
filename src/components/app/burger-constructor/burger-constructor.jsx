import BurgerComponents from './burger-components/burger-components.jsx'
import PriceTag from './price-tag/price-tag.jsx'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'


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



export default BurgerConstructor