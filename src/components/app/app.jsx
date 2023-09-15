import styles from "./app.module.css"
import AppHeader from './app-header/app-header.jsx'
import BurgerIngredients from './burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './burger-constructor/burger-constructor.jsx'
import ModalOverlay from "./modal-overlay/modal.jsx"
import OrderDetails from "./order-details/order-details.jsx"
import IngredientDetails from "./ingredient-details/ingredient-details.jsx"
import {  useState, useEffect } from "react"

function App() {
    const URL = 'https://norma.nomoreparties.space/api/ingredients';
 
    const [isModalOrderActive, setModalOrderActive] = useState(false)
    const [isModalIngredientActive, setModalIngredientActive] = useState(false)
    const [ingredient, setIngredient] = useState(null)
    const [state, setState] = useState({
      isLoading: false,
      hasError: false,
      ingredients: []
    })

    const getIngredients = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch(URL)
      .then(res => res.json())
      .then(data => setState({ ...state, ingredients: data.data, isLoading: false }))
      .catch(e => {
        setState({ ...state, hasError: true, isLoading: false });
      });
    }
 
    useEffect(() => {
      getIngredients()
    }, [state.ingredients])

    function openPopupIngredient(ingredient) {
      setModalIngredientActive(true)
      setIngredient(ingredient)
    }
 

    return (
      <>
        <div className={styles.app}>
          <AppHeader />
          {state.ingredients.length > 0 ? (
                    <div className={styles['two-columns']}>
                    <BurgerIngredients openPopupIngredient={openPopupIngredient} ingredients={state.ingredients} />
                    <BurgerConstructor setModalActive={setModalOrderActive} ingredients={state.ingredients} />
                  </div>
          ) : <p style={{fontSize: '30px'}}>Загрузка...</p>}

        </div>
        <ModalOverlay isModalActive={isModalOrderActive} onClose={() => setModalOrderActive(false)}>
          <OrderDetails />
        </ModalOverlay>
        <ModalOverlay isModalActive={isModalIngredientActive} onClose={() => setModalIngredientActive(false)}>
          <IngredientDetails ingredient={ingredient} />
        </ModalOverlay>
      </>

    )
}

export default App;


