import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    ingredient: null,
  }

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        setIngredient(state, action){
            state.ingredient = action.payload
        },
    }
  })

export const { setIngredient } = ingredientSlice.actions
export default ingredientSlice.reducer 