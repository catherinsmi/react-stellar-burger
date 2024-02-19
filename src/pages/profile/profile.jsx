import styles from './profile.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/slices/user-slice';

export default function Profile() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout({ token: localStorage.getItem('refreshToken') }));
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.list}>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? 'rgba(242, 242, 243, 1)' : 'rgba(133, 133, 173, 1)',
                };
              }}
              className={styles.link}
              to="/profile"
              end>
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? 'rgba(242, 242, 243, 1)' : 'rgba(133, 133, 173, 1)',
                };
              }}
              className={styles.link}
              to="/profile/orders">
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClick}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'rgba(242, 242, 243, 1)' : 'rgba(133, 133, 173, 1)',
                };
              }}
              className={styles.link}
              to="/">
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={styles.caption}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <Outlet />
    </div>
  );
}
