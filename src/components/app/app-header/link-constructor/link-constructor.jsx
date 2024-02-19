import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './link-constructor.module.css';
import { NavLink, useLocation } from 'react-router-dom';

function LinkConstructor() {
  const { pathname } = useLocation();

  return (
    <NavLink
      to="/"
      className={styles.link}
      style={({ isActive }) => ({ color: isActive ? 'rgb(242, 242, 243)' : '#8585AD' })}>
      <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} />
      Конструктор
    </NavLink>
  );
}

export default LinkConstructor;
