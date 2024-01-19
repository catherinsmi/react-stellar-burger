import Card from './card/card.jsx'
import styles from './buns.module.css'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setTab } from '../../../../../services/slices/ingredients-slice.js'

function Buns({buns, openPopupIngredient}) {
    const dispatch = useDispatch()
    const { ref, inView, entry } = useInView({
    
        threshold: 1,
      });

    useEffect(()=>{
        if(inView){
            dispatch(setTab('buns'))
        }

    },[inView])
 
    return (
        <>
        <h2 id='buns' className={styles.header}>Булки</h2>
        <div ref={ref} className={styles.cards}>
            {buns.map(bun => (
                <Card openPopupIngredient={openPopupIngredient} key={bun._id} bun={bun} />
            ))}
        </div>
        </>
    )
}

Buns.propTypes = {
    buns: PropTypes.array.isRequired,
    openPopupIngredient: PropTypes.func
}

export default Buns