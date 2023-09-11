import { BurgerIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './link-constructor.module.css'

function LinkConstructor() {
    return (
        <a href='#' className={styles.link}>
            <BurgerIcon type="primary" />
            <p className={styles.caption}>Конструктор</p>
        </a>
    )
}

export default LinkConstructor