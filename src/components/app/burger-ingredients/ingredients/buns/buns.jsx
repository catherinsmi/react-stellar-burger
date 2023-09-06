import Card from './card/card.jsx'
import styles from './buns.module.css'

function Buns({buns}) {

    return (
        <>
        <h2 className={styles.header}>Булки</h2>
        <div className={styles.cards}>
            {buns.map(bun => (
                <Card key={bun._id} bun={bun} />
            ))}
        </div>
        </>
    )
}

export default Buns