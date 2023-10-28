import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './price-tag.module.css'
import { ConstructorContext } from '../../../../utils/context'
import { useContext } from 'react';

function PriceTag() {
    const { totalPrice} = useContext(ConstructorContext);

    // const calculatePrice = (items) => {
        
    //     let summa = items.reduce((summa, item) => { 
    //         return summa += item.price
    //     }, pickedBun.price * 2)
    //     return summa
    // }
    // let summa = calculatePrice(pickedIngredients)
    
    return (
        <span className={styles['price-tag']}>
            <p className={styles.price}>{totalPrice}</p>
            <CurrencyIcon type="primary" />
        </span> 
    )
}

export default PriceTag