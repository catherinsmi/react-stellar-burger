export const initialState = {
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

export const URL = 'https://norma.nomoreparties.space/api';