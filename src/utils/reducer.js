export function reducer (state, {type, payload}) {
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