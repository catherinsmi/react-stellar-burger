import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../../../utils/context'
import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

function OrderButton({setModalActive, sendOrder}) {
  const { pickedIngredients } = useContext(ConstructorContext);
  const pickedIngredientsID = useMemo(() => pickedIngredients.map(ingredient =>  ingredient._id), [pickedIngredients])

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

OrderButton.propTypes = {
  setModalActive: PropTypes.func,
  sendOrder: PropTypes.func.isRequired
}

export default OrderButton
