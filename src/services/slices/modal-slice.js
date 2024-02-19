import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isModalOrderActive: false,
    isModalIngredientActive: false,
  }

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOrderActive(state, action){
            state.isModalOrderActive = action.payload
        },
        setModalIngredientActive(state, action){
            state.isModalIngredientActive= action.payload
        },
    }
  })

export const { setModalOrderActive, setModalIngredientActive } = modalSlice.actions
export default modalSlice.reducer 