import MainHeadline from './main-headline/main-headline.jsx'
import Ingredients from './ingredients/ingredients.jsx'
import Tabs from './tabs/tabs.jsx'
import styles from './burger-ingredients.module.css'
import PropTypes from 'prop-types'

function BurgerIngredients(props) {
    
    return (
        <section className={styles.section}>
            <MainHeadline />
            <Tabs />
            <Ingredients {...props} />
        </section>
    )
}

BurgerIngredients.propTypes = {
    props: PropTypes.any
}

export default BurgerIngredients