import LinkConstructor from './link-constructor/link-constructor.jsx';
import LinkOrder from './link-order/link-order.jsx';
import LinkProfile from './link-profile/link-profile.jsx';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import { NavLink } from 'react-router-dom';

function AppHeader() {
  return (
    <header>
      <nav className={styles.nav}>
        <LinkConstructor />
        <LinkOrder />
        <span className={styles.logo}>
          <Logo />
        </span>
        <LinkProfile />
      </nav>
    </header>
  );
}

export default AppHeader;
