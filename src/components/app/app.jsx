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


function reducer (state, {type, payload}) {
    switch(type) {
      case 'FETCH_INGREDIENTS':
        return {
          ...state,
          hasError: false, 
          isLoading: true 
        }
      case 'GET_INGREDIENTS':
        return {
          ...state, 
          ingredients: payload.data, 
          isLoading: false 
        }
      case 'CATCH_ERROR':
        return {
          ...state, 
          hasError: true, 
          isLoading: false
        }
      case 'PICK_INGREDIENT':
        return {
          ...state,
          pickedIngredients: [...state.pickedIngredients, payload.pickedIngredient]
        } 
      case 'PICK_BUN':
        return {
          ...state,
          pickedBun: payload.pickedBun
        } 
      case 'GET_ORDER_NUMBER':
        return {
          ...state,
          fetchedOrderNumber: payload.number
        }  
      case 'CALCULATE_TOTAL_PRICE':
        return {
          ...state,
          totalPrice: state.pickedIngredients.reduce((summa, item) => { 
            return summa += item.price
        }, state.pickedBun.price * 2)
        }  
      default:
        return state;
    }
    
}

const initialState = {
  isLoading: false,
  hasError: false,
  ingredients: [],
  pickedIngredients: [],
  pickedBun: {
    calories: 420,
    carbohydrates: 53,
    fat: 24,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    name: "Краторная булка N-200i",
    price: 1255,
    proteins: 80,
    type: "bun",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa093c"
  },
  fetchedOrderNumber: 0,
  totalPrice: 0
}

function App() {
    const URL = 'https://norma.nomoreparties.space/api';
 
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isModalOrderActive, setModalOrderActive] = useState(false)
    const [isModalIngredientActive, setModalIngredientActive] = useState(false)
    const [ingredient, setIngredient] = useState(null)

    const getIngredients = () => {
      dispatch({type:'FETCH_INGREDIENTS'})
    fetch(`${URL}/ingredients`)
      .then(checkReponse)
      .then(data => dispatch({type:'GET_INGREDIENTS', payload: {data: data.data}}))
      .catch(e => {
        dispatch({type:'CATCH_ERROR'})
      });
    }
 
    const openPopupIngredient = (ingredient) => {
      setModalIngredientActive(true)
      setIngredient(ingredient)
      ingredient.type === 'bun' ? dispatch({type:'PICK_BUN', payload: {pickedBun: ingredient}}) : dispatch({type:'PICK_INGREDIENT', payload: {pickedIngredient: ingredient}})
    }

    state.sendOrder = async (body) => {
      const res = await fetch(`${URL}/orders`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(body)
      })
      const data = await checkReponse(res)
      return dispatch({ type: 'GET_ORDER_NUMBER', payload: {number: data.order.number}})
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
                      <BurgerConstructor setModalActive={setModalOrderActive} />
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

