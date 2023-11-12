import Buns from './buns/buns.jsx';
import Sauces from './sauces/sauces.jsx';
import Fillings from './fillings/fillings.jsx';
import styles from './ingredients.module.css';
import PropTypes from 'prop-types';
import { useMemo, useEffect } from 'react';
import { BUN, SAUCE, MAIN } from '../../../../constants/ingredients.consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients } from '../../../../services/slices/ingredients-slice.js';

function Ingredients({ openPopupIngredient }) {
  const { items, isIngredientsLoading } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  const getIngredients = async () => {
    dispatch(fetchIngredients());
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const typeIngredients = useMemo(
    () => ({
      buns: items.filter((item) => item.type === BUN),
      sauces: items.filter((item) => item.type === SAUCE),
      fillings: items.filter((item) => item.type === MAIN),
    }),
    [items],
  );

  return (
    <div className={styles['scroll-block']}>
      {isIngredientsLoading ? (
        <p>LOADING</p>
      ) : (
        <>
          <Buns id={'buns'} openPopupIngredient={openPopupIngredient} buns={typeIngredients.buns} />
          <Sauces
            id={'sauces'}
            openPopupIngredient={openPopupIngredient}
            sauces={typeIngredients.sauces}
          />
          <Fillings
            id={'fillings'}
            openPopupIngredient={openPopupIngredient}
            fillings={typeIngredients.fillings}
          />
        </>
      )}
    </div>
  );
}

Ingredients.propTypes = {
  openPopupIngredient: PropTypes.func,
};

export default Ingredients;
