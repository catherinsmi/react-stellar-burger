import Card from './card/card.jsx'
import styles from './fillings.module.css'

function Fillings({fillings, openPopupIngredient}) {

    return (
        <>
            <h2 id='fillings' className={styles.header}>Начинки</h2>
            <div className={styles.cards}>
                {fillings.map(filling => (
                    <Card openPopupIngredient={openPopupIngredient} key={filling._id} filling={filling} />
                ))}
            </div>
        </>
    )
}

export default Fillings