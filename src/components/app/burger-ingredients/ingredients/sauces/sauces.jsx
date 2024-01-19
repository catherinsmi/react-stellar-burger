import Card from './card/card.jsx'
import styles from './sauces.module.css'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setTab } from '../../../../../services/slices/ingredients-slice.js'

function Sauces({sauces, openPopupIngredient}) {
    const dispatch = useDispatch()
    const { ref, inView, entry } = useInView({
    
        threshold: 1,
      });

    useEffect(()=>{
        if(inView){
            dispatch(setTab('sauces'))
        }

    },[inView])

    return (
        <>
            <h2 id='sauces' className={styles.header}>Соусы</h2>
            <div ref={ref} className={styles.cards}>
                {sauces.map(sauce => (
                    <Card openPopupIngredient={openPopupIngredient} key={sauce._id} sauce={sauce} />
                    ))}
            </div>
        </>
    )
}

Sauces.propTypes = {
    sauces: PropTypes.array.isRequired,
    openPopupIngredient: PropTypes.func
}

export default Sauces