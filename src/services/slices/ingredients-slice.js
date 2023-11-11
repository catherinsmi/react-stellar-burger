import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from '../../constants/app.consts'
import { checkReponse } from "../../utils/check-response";

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchIngredientsFromBE', async () => {
        const res = await fetch(`${URL}/ingredients`)
        const data = await checkReponse(res)
        return data.data
    }
  )

const initialState = {
    isIngredientsLoading: false,
    hasError: false,
    items: [],
    currentTab: 'buns',
  }

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        setIngredients(state, action){
            state.items = action.payload
        },
        setTab(state, action){
            state.currentTab = action.payload
        }
    },
    extraReducers: {
        [fetchIngredients.fulfilled]: (state, action) => {
           state.isIngredientsLoading = false
           state.items = action.payload
            
        },
        [fetchIngredients.pending]: (state, action) => {
            state.isIngredientsLoading = true
            
        },
        [fetchIngredients.rejected]: (state, action) => {
            state.items = []
            
        }
    }

  })

export const { setIngredients, setTab } = ingredientsSlice.actions
export default ingredientsSlice.reducer 