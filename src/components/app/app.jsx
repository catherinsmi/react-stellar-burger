import styles from './app.module.css';
import AppHeader from './app-header/app-header.jsx';
import BurgerIngredients from './burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from './burger-constructor/burger-constructor.jsx';
import Modal from './modal/modal.jsx';
import OrderDetails from './order-details/order-details.jsx';
import OrderLoader from './order-details/order-loader/order-loader.jsx';
import IngredientDetails from './ingredient-details/ingredient-details.jsx';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { setIngredient } from '../../services/slices/ingredient-slice';

function App() {
  const dispatch = useDispatch();
  const fetchedOrderNumber = useSelector((state) => state.order.fetchedOrderNumber);

  const [isModalOrderActive, setModalOrderActive] = useState(false);
  const [isModalIngredientActive, setModalIngredientActive] = useState(false);

  const openPopupIngredient = (ingredient) => {
    dispatch(setIngredient(ingredient));
    setModalIngredientActive(true);
  };

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <div className={styles['two-columns']}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients openPopupIngredient={openPopupIngredient} />
            <BurgerConstructor setModalActive={setModalOrderActive} />
          </DndProvider>
        </div>
      </div>
      <Modal isModalActive={isModalOrderActive} onClose={() => setModalOrderActive(false)}>
        {fetchedOrderNumber ? (
          <OrderDetails fetchedOrderNumber={fetchedOrderNumber} />
        ) : (
          <OrderLoader />
        )}
      </Modal>
      <Modal
        isModalActive={isModalIngredientActive}
        onClose={() => setModalIngredientActive(false)}>
        <IngredientDetails />
      </Modal>
    </>
  );
}

export default App;
