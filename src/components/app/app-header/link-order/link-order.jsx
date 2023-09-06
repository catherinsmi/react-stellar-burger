import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './link-order.module.css'

function LinkOrder() {
    return (
        <a href='#' className={styles.link}>
            <ListIcon type="secondary" />
            <p className={styles.caption}>Лента заказов</p>
        </a>
    )
}

export default LinkOrder