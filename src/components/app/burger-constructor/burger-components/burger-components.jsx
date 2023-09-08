import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import Component from './component/component.jsx'
import styles from './burger-components.module.css'

function BurgerComponents({ingredients}) {
    const bun = ingredients.find(i => i._id === '60666c42cc7b410027a1a9b1')
  
    return (
        <div className={styles.components}>
        <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={bun.image}
        />
        <div className={styles['scroll-block']}>
            {ingredients.map(ingredient => (
                <Component key={ingredient._id} ingredient={ingredient} />
            ))}
        </div>
        <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={bun.image}
        />
    </div>
    )
}

export default BurgerComponents