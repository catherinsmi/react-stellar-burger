import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

export default function ComponentBun({bun, type}) {
    let position = type === 'top' ? "(верх)" : "(низ)"

  return <ConstructorElement
        type={type}
        isLocked={true}
        text={`${bun.name} ${position}`}
        price={bun.price}
        thumbnail={bun.image}
    />
  
}
