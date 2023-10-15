import Card from './card/card.jsx'
import styles from './sauces.module.css'
import PropTypes from 'prop-types'

function Sauces({sauces, openPopupIngredient}) {

    return (
        <>
            <h2 id='sauces' className={styles.header}>Соусы</h2>
            <div className={styles.cards}>
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