import MainHeadline from './main-headline/main-headline.jsx'
import Ingredients from './ingredients/ingredients.jsx'
import Tabs from './tabs/tabs.jsx'
import styles from './burger-ingredients.module.css'
// import { useRef, useState } from 'react';

function BurgerIngredients(props) {
    
    return (
        <section className={styles.section}>
            <MainHeadline />
            <Tabs />
            <Ingredients {...props} />
        </section>
    )
}

export default BurgerIngredients