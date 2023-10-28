import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../../../utils/context'
import { useContext } from 'react'

function OrderButton({setModalActive}) {
  const { sendOrder, pickedIngredients } = useContext(ConstructorContext);
  const pickedIngredientsID = pickedIngredients.map(ingredient =>  ingredient._id)

  const handleClick = (pickedIngredientsID) => {
    let order = {ingredients: pickedIngredientsID}
    sendOrder(order)
    setModalActive(true)
  }

  return (
    <div onClick={()=> handleClick(pickedIngredientsID)}>
        <Button  htmlType="button" type="primary" size="medium">
                Оформить заказ
        </Button>
    </div>
  )
}

export default OrderButton
