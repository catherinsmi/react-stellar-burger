import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { setPickedBun } from '../../../../../services/slices/constructor-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'


export default function ComponentBun({ type}) {
    let position = type === 'top' ? "(верх)" : "(низ)"

    const pickedBun = useSelector(state => state.burgstructor.pickedBun);

    const dispatch = useDispatch()

    const [{ canDrop, isOver }, dropBun] = useDrop(() => ({
      accept: 'bun',
      drop: (item) => addBunToConstructor(item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }))

    const borderColor = isOver ? 'c90076' : ''

    const addBunToConstructor = (item) => {
      console.log(item)
      dispatch(setPickedBun(item))
    }

  return <div ref={dropBun} style={{borderColor}} > 
    <ConstructorElement
        type={type}
        isLocked={true}
        text={`${pickedBun.name} ${position}`}
        price={pickedBun.price}
        thumbnail={pickedBun.image}
    />
  </div> 
  
}
