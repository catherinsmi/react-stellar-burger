import Buns from './buns/buns.jsx'
import Sauces from './sauces/sauces.jsx'
import Fillings from './fillings/fillings.jsx'
import styles from './ingredients.module.css'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../../utils/prop-types.js'
import {  useMemo } from "react"
import { BUN, SAUCE, MAIN } from '../../../../constants/ingredients.consts'


function Ingredients({openPopupIngredient, ingredients}){
    const buns = useMemo(() => ingredients.filter(i => i.type === BUN), [ingredients])
    const sauces = useMemo(() => ingredients.filter(i => i.type === SAUCE), [ingredients])
    const fillings = useMemo(() => ingredients.filter(i => i.type === MAIN), [ingredients])
    
    return (
        <div className={styles['scroll-block']}>
            <Buns openPopupIngredient={openPopupIngredient}  buns={buns} />
            <Sauces openPopupIngredient={openPopupIngredient}  sauces={sauces} />
            <Fillings openPopupIngredient={openPopupIngredient}  fillings={fillings} />
        </div>
    )
}
Ingredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired),
    openPopupIngredient: PropTypes.func
}

export default Ingredients