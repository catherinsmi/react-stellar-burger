import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'
import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux'

function Card({filling, openPopupIngredient}) {
    const pickedItem = useSelector(state => state.burgstructor.pickedIngredients.find(item => item._id === filling._id))
    const addedCount = pickedItem ? pickedItem.count : 0

    const [{ isDragging }, drag] = useDrag({
        type: 'ingredient',
        item: filling,
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      })

    return (
        <div onClick={()=> openPopupIngredient(filling)} className={styles.card}>
            {addedCount > 0 && <span className={styles.counter}>{addedCount}</span>}
            <img ref={drag} src={filling.image} alt={filling.name} className={styles.img} />
            <span className={styles['price-tag']}>
                <p className={styles.price}>{filling.price}</p>
                <CurrencyIcon type="primary" />
            </span>
            <h3 className={styles.name}>{filling.name}</h3>
        </div>
    )
}

Card.propTypes = {
    filling: PropTypes.object.isRequired,
    openPopupIngredient: PropTypes.func
}

export default Card