import Card from './card/card.jsx'
import styles from './sauces.module.css'

function Sauces({sauces}) {

    return (
        <>
            <h2 id='sauces' className={styles.header}>Соусы</h2>
            <div className={styles.cards}>
                {sauces.map(sauce => (
                    <Card key={sauce._id} sauce={sauce} />
                    ))}
            </div>
        </>
    )
}

export default Sauces