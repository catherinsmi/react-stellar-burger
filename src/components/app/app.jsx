import styles from "./app.module.css"
import AppHeader from './app-header/app-header.jsx'
import BurgerIngredients from './burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './burger-constructor/burger-constructor.jsx'
import ModalOverlay from "./modal-overlay/modal-overlay.jsx"
import Modal from "./modal/modal.jsx"
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

    const checkReponse = (res) => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    };

    const getIngredients = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch(URL)
      .then(checkReponse)
      .then(data => setState({ ...state, ingredients: data.data, isLoading: false }))
      .catch(e => {
        setState({ ...state, hasError: true, isLoading: false });
      });
    }
 
    useEffect(() => {
      getIngredients()
    }, [])

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
          ) : <p className={styles.paragraph}>Загрузка...</p>}
        </div>
        <ModalOverlay isModalActive={isModalOrderActive} onClose={() => setModalOrderActive(false)}>
          <Modal onClose={() => setModalOrderActive(false)}>
            <OrderDetails />
          </Modal>  
        </ModalOverlay>
        <ModalOverlay isModalActive={isModalIngredientActive} onClose={() => setModalIngredientActive(false)}>
          <Modal onClose={() => setModalIngredientActive(false)}>
          <IngredientDetails ingredient={ingredient} />
          </Modal>
        </ModalOverlay>
      </>

    )
}

export default App;


