import Card from './card/card.jsx'
import styles from './fillings.module.css'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setTab } from '../../../../../services/slices/ingredients-slice.js'

function Fillings({fillings, openPopupIngredient}) {
    const dispatch = useDispatch()
    const { ref, inView, entry } = useInView({
    
        threshold: 0.5,
      });

    useEffect(()=>{
        if(inView){
            dispatch(setTab('fillings'))
        }

    },[inView])

    return (
        <>
            <h2 id='fillings' className={styles.header}>Начинки</h2>
            <div ref={ref} className={styles.cards}>
                {fillings.map(filling => (
                    <Card  openPopupIngredient={openPopupIngredient} key={filling._id} filling={filling} />
                ))}
            </div>
        </>
    )
}

Fillings.propTypes = {
    fillings: PropTypes.array.isRequired,
    openPopupIngredient: PropTypes.func
}

export default Fillings