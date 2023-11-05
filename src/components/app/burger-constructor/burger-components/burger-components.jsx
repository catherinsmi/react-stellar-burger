import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import Component from './component/component.jsx'
import styles from './burger-components.module.css'
import PropTypes from 'prop-types'
import { ConstructorContext } from '../../../../utils/context'
import { useContext } from 'react';
import ComponentBun from './component-bun/component-bun.jsx'

function BurgerComponents() {
    const { pickedIngredients, pickedBun } = useContext(ConstructorContext);
  
    return (
        <div className={styles.components}>
            <ComponentBun bun={pickedBun} type="top" />
            <div className={styles['scroll-block']}>
                {pickedIngredients.map(ingredient => (
                    <Component key={ingredient._id} ingredient={ingredient} position='(вверх)' />
                ))}
            </div>
            <ComponentBun bun={pickedBun} type="bottom" />
        </div>
    )
}


export default BurgerComponents