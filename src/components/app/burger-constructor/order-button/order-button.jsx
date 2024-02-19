import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../../../services/slices/order-slice';
import { setModalOrderActive } from '../../../../services/slices/modal-slice';
import PropTypes from 'prop-types';

function OrderButton() {
  const pickedIngredients = useSelector((state) => state.burgstructor.pickedIngredients);
  const pickedIngredientsID = useMemo(
    () => pickedIngredients.map((ingredient) => ingredient._id),
    [pickedIngredients],
  );
  const dispatch = useDispatch();

  const handleClick = (pickedIngredientsID) => {
    let order = { ingredients: pickedIngredientsID };
    dispatch(fetchOrder(order));
    dispatch(setModalOrderActive(true));
  };

  return (
    <div onClick={() => handleClick(pickedIngredientsID)}>
      <Button htmlType="button" type="primary" size="medium">
        Оформить заказ
      </Button>
    </div>
  );
}

export default OrderButton;
