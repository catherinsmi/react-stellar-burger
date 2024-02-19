import React from 'react';
import styles from './home.module.css';
import BurgerConstructor from '../../components/app/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/app/burger-ingredients/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector, useDispatch } from 'react-redux';
import { setIngredient } from '../../services/slices/ingredient-slice';
import { setModalIngredientActive } from '../../services/slices/modal-slice';

export default function Home() {
  const dispatch = useDispatch();
  const openPopupIngredient = (ingredient) => {
    dispatch(setIngredient(ingredient));
    dispatch(setModalIngredientActive(true));
  };

  return (
    <div className={styles['two-columns']}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients openPopupIngredient={openPopupIngredient} />
        <BurgerConstructor />
      </DndProvider>
    </div>
  );
}
