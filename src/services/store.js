import { configureStore } from '@reduxjs/toolkit'
import burgstructor from './slices/constructor-slice'
import ingredients from './slices/ingredients-slice'
import order from './slices/order-slice'
import ingredient from './slices/ingredient-slice'
import modal from './slices/modal-slice'
import user from './slices/user-slice'

export const store = configureStore({
    reducer: {
        burgstructor,
        ingredients,
        order,
        ingredient,
        modal,
        user

    }
})

