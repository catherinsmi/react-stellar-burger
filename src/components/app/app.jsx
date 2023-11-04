import styles from "./app.module.css"
import AppHeader from './app-header/app-header.jsx'
import BurgerIngredients from './burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './burger-constructor/burger-constructor.jsx'
import Modal from "./modal/modal.jsx"
import OrderDetails from "./order-details/order-details.jsx"
import OrderLoader from './order-details/order-loader/order-loader.jsx'
import IngredientDetails from "./ingredient-details/ingredient-details.jsx"
import {  useState, useEffect, useReducer } from "react"
import { ConstructorContext } from "../../utils/context"
import { checkReponse } from "../../utils/check-response"
import { reducer } from '../../utils/reducer'
import { initialState, URL } from "../../constants/app.consts"


function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isModalOrderActive, setModalOrderActive] = useState(false)
    const [isModalIngredientActive, setModalIngredientActive] = useState(false)
    const [ingredient, setIngredient] = useState(null)
 
    const openPopupIngredient = (ingredient) => {
      setModalIngredientActive(true)
      setIngredient(ingredient)
      ingredient.type === 'bun' ? dispatch({type:'PICK_BUN', payload: {pickedBun: ingredient}}) : dispatch({type:'PICK_INGREDIENT', payload: {pickedIngredient: ingredient}})
    }

    const sendOrder = async (body) => {
      const res = await fetch(`${URL}/orders`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(body)
      })
      const data = await checkReponse(res)
      return dispatch({ type: 'GET_ORDER_NUMBER', payload: {number: data.order.number}})
    }

    const getIngredients = () => {
      dispatch({type:'FETCH_INGREDIENTS'})
    fetch(`${URL}/ingredients`)
      .then(checkReponse)
      .then(data => dispatch({type:'GET_INGREDIENTS', payload: {data: data.data}}))
      .catch(e => {
        dispatch({type:'CATCH_ERROR'})
      });
    }

    useEffect(() => {
      getIngredients()
    }, [])

    useEffect(() => {
      dispatch({type :'CALCULATE_TOTAL_PRICE'})
      },
      [state.pickedBun, state.pickedIngredients]
    );

    return (
      <>
        <div className={styles.app}>
          <AppHeader />
          {state.ingredients.length > 0 ? (
                    <div className={styles['two-columns']}>
                    <BurgerIngredients openPopupIngredient={openPopupIngredient} ingredients={state.ingredients} />
                    <ConstructorContext.Provider value={state} >
                      <BurgerConstructor setModalActive={setModalOrderActive} sendOrder={sendOrder} />
                    </ConstructorContext.Provider>
                  </div>
          ) : <p className={styles.paragraph}>Загрузка...</p>}
        </div>
          <Modal isModalActive={isModalOrderActive} onClose={() => setModalOrderActive(false)}>
            {state.fetchedOrderNumber > 0 ? <OrderDetails fetchedOrderNumber={state.fetchedOrderNumber} /> : <OrderLoader />}
            
          </Modal>  
          <Modal isModalActive={isModalIngredientActive} onClose={() => setModalIngredientActive(false)}>
            <IngredientDetails ingredient={ingredient} />
          </Modal>
      </>

    )
}

export default App;

