import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './link-profile.module.css';
import { NavLink, useLocation, useMatch } from 'react-router-dom';
import { useState } from 'react';

function LinkProfile() {
  // const [isActiveIcon, setIsActiveIcon] = useState(false);
  // const location = useLocation();
  // const match = useMatch(location.pathname);

  // console.log({ match });

  return (
    <NavLink
      to="/profile"
      className={styles.link}
      style={({ isActive }) => ({ color: isActive ? 'rgb(242, 242, 243)' : '#8585AD' })}>
      {({ isActive }) => (
        <>
          <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
          Личный кабинет
        </>
      )}
    </NavLink>
  );
}

export default LinkProfile;
