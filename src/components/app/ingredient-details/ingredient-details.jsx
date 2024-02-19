import React from 'react';
import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

function IngredientDetails() {
  const ingredient = useSelector((state) => state.ingredient.ingredient);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Детали ингредиента</h3>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h4 className={styles.name}>{ingredient.name}</h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.text}>Калории,ккал</p>
          <p className={styles.digits}>{ingredient.calories}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>Белки, г</p>
          <p className={styles.digits}>{ingredient.proteins}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>Жиры, г</p>
          <p className={styles.digits}>{ingredient.fat}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>Углеводы, г</p>
          <p className={styles.digits}>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
