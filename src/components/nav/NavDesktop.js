import logo from '../../assets/shared/logo.svg';
import styles from './nav.module.scss';
import { NavLink } from 'react-router-dom';
const NavDesktop = () => {
  return (
    <nav className={`${styles.wrapper} ${styles.desktop}`}>
      <img className={styles.logo} src={logo} alt='logo' />
      <ul className={styles.listDesk}>
        <li className={styles.item}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? styles.activeDesk : null)}>
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to='/destination'
            className={({ isActive }) => (isActive ? styles.activeDesk : null)}>
            Destination
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to='/crew'
            className={({ isActive }) => (isActive ? styles.activeDesk : null)}>
            Crew
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to='/technology'
            className={({ isActive }) => (isActive ? styles.activeDesk : null)}>
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
