import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './component.module.css';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deletePickedIngredient } from '../../../../../services/slices/constructor-slice';
import { ingredientPropType } from '../../../../../utils/prop-types';

function Component({ ingredient, index, id, moveCard }) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} className={styles.component} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => dispatch(deletePickedIngredient(ingredient))}
      />
    </div>
  );
}
Component.propTypes = {
  ingredient: ingredientPropType.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  moveCard: PropTypes.func.isRequired,
};
export default Component;
