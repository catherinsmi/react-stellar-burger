import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

function OrderButton({setModalActive}) {
  return (
    <div onClick={()=> setModalActive(true)}>
        <Button  htmlType="button" type="primary" size="medium">
                Офрмить заказ
        </Button>
    </div>
  )
}

export default OrderButton
