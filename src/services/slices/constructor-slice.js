import { createSlice } from "@reduxjs/toolkit";
import {v4} from 'uuid'


const initialState = {
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
    totalPrice: 0,
    counter: null
  }

export const burgstructorSlice = createSlice({
    name: 'burgstructor',
    initialState,
    reducers: {
      setPickedIngredients(state, action){
        const findItem = state.pickedIngredients.find(item => item._id === action.payload._id)

        if(findItem){
          state.pickedIngredients.push({
            ...action.payload,
            count: findItem.count++,
            pickedIngredientId: v4()
          })
        } else {
          state.pickedIngredients.push({
            ...action.payload,
            count: 1,
            pickedIngredientId: v4()
          })
        }
      },
      setPickedBun(state, action){
          state.pickedBun = action.payload
      },
      setTotalPrice(state){
        state.totalPrice = state.pickedIngredients.reduce((summa, item) => { 
          return summa += item.price
      }, state.pickedBun.price * 2)
      },
      setSortingCards(state, action){
        state.pickedIngredients = action.payload
      },
      deletePickedIngredient(state, action){
        state.pickedIngredients = state.pickedIngredients.filter(item => item.pickedIngredientId !== action.payload.pickedIngredientId)
        console.log(state.pickedIngredients)
      }
    }

  })

export const { setPickedIngredients, setPickedBun, setTotalPrice, setSortingCards, deletePickedIngredient } = burgstructorSlice.actions
export default burgstructorSlice.reducer 

