import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './link-profile.module.css'

function LinkProfile() {
    return (
        <a href='#' className={styles.link}>
            <ProfileIcon type="secondary" />
            <p className={styles.caption}>Личный кабинет</p>
        </a>
    )
}

export default LinkProfile