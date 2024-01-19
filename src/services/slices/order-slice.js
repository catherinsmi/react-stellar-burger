import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from '../../constants/app.consts'
import { checkResponse} from "../../utils/check-response";

export const fetchOrder = createAsyncThunk(
    'order/fetchOrderNumber',  async (body) => {
        const res = await fetch(`${URL}/orders`, {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(body)
        })
        const data = await checkResponse(res)
        return data.order.number
      }
  )


const initialState = {
    isOrderLoading: false,
    fetchedOrderNumber: null,
  }

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
 
    },
    extraReducers: {
        [fetchOrder.fulfilled]: (state, action) => {
           state.isIngredientsLoading = false
           state.fetchedOrderNumber = action.payload
            
        },
        [fetchOrder.pending]: (state, action) => {
            state.isIngredientsLoading = true
            
        },
        [fetchOrder.rejected]: (state, action) => {
            state.items = []
            
        }
    }

  })

export const { } = orderSlice.actions
export default orderSlice.reducer 