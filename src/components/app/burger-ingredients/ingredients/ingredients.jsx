import Buns from './buns/buns.jsx'
import Sauces from './sauces/sauces.jsx'
import Fillings from './fillings/fillings.jsx'
import styles from './ingredients.module.css'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../../utils/prop-types.js'

function Ingredients({ingredients}){
    const buns = ingredients.filter(i => i.type === 'bun')
    const sauces = ingredients.filter(i => i.type === 'sauce')
    const fillings = ingredients.filter(i => i.type === 'main')
    
    return (
        <div className={styles['scroll-block']}>
            <Buns  buns={buns} />
            <Sauces sauces={sauces} />
            <Fillings fillings={fillings} />
        </div>
    )
}
Ingredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired)
}

export default Ingredients