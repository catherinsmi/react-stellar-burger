import Card from './card/card.jsx'
import styles from './buns.module.css'

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

export default Buns