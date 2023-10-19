import Card from './card/card.jsx'
import styles from './buns.module.css'
import PropTypes from 'prop-types'

function Buns({buns, openPopupIngredient}) {

    return (
        <>
        <h2 id='buns' className={styles.header}>Булки</h2>
        <div className={styles.cards}>
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