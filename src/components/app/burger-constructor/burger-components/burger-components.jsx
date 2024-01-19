import Component from './component/component.jsx'
import styles from './burger-components.module.css'
import { useEffect } from 'react';
import ComponentBun from './component-bun/component-bun.jsx'
import { useDrop } from 'react-dnd'
import { setPickedIngredients, setTotalPrice, setSortingCards } from '../../../../services/slices/constructor-slice'
import { useDispatch, useSelector } from 'react-redux'


function BurgerComponents() {
    const {pickedIngredients, pickedBun} = useSelector(state => state.burgstructor);
    const  dispatch = useDispatch()

    useEffect(() => {
      dispatch(setTotalPrice())
      },
      [pickedBun, pickedIngredients]
    );

    const [{ canDrop, isOver }, dropIngredient] = useDrop(() => ({
        accept: 'ingredient',
        drop: (item) => addIngredientToConstructor(item),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      }))

      const addIngredientToConstructor = (item) => {
        dispatch(setPickedIngredients(item))
      }

      const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = pickedIngredients[dragIndex]
        const newCards = [...pickedIngredients]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0, dragCard )

        dispatch(setSortingCards(newCards))
      }
  
    return (
        <div className={styles.components}>
            <ComponentBun type="top" />
            <div ref={dropIngredient} className={styles['scroll-block']}>
                {pickedIngredients.map((ingredient, index) => (
                    <Component key={ingredient.pickedIngredientId} id={ingredient.pickedIngredientId} index={index} ingredient={ingredient} moveCard={moveCard} position='(вверх)' />
                ))}
            </div>
            <ComponentBun  type="bottom" />
        </div>
    )
}


export default BurgerComponents