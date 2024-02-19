import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './card.module.css';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useLocation, Link } from 'react-router-dom';

function Card({ bun, openPopupIngredient }) {
  const location = useLocation();

  const ingredientId = bun['_id'];

  const [{ isDragging }, dragBun] = useDrag({
    type: 'bun',
    item: bun,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Link
      key={ingredientId}
      to={`/ingredients/${ingredientId}`}
      state={{ background: location }}
      className={styles.link}>
      <div onClick={() => openPopupIngredient(bun)} className={styles.card}>
        <img ref={dragBun} src={bun.image} alt={bun.name} className={styles.img} />
        <span className={styles['price-tag']}>
          <p className={styles.price}>{bun.price}</p>
          <CurrencyIcon type="primary" />
        </span>
        <h3 className={styles.name}>{bun.name}</h3>
      </div>
    </Link>
  );
}

Card.propTypes = {
  bun: PropTypes.object.isRequired,
  openPopupIngredient: PropTypes.func,
};

export default Card;
