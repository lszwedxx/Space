import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import iconHamb from '../../assets/shared/icon-hamburger.svg';
import iconClose from '../../assets/shared/icon-close.svg';
import styles from './nav.module.scss';
const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav aria-label='nav-main-mobile' className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt='logo' />
        {!open ? (
          <img
            tabIndex='0'
            onClick={toggleNav}
            className={styles.hamb}
            src={iconHamb}
            alt='hamburger'
          />
        ) : (
          <img
            tabIndex='0'
            onClick={toggleNav}
            className={styles.close}
            src={iconClose}
            alt='close'
          />
        )}
        {open ? (
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? styles.active : null)}>
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to='/destination'
                className={({ isActive }) => (isActive ? styles.active : null)}>
                Destination
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to='/crew'
                className={({ isActive }) => (isActive ? styles.active : null)}>
                Crew
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to='/technology'
                className={({ isActive }) => (isActive ? styles.active : null)}>
                Technology
              </NavLink>
            </li>
          </ul>
        ) : null}
      </nav>
    </>
  );
};

export default Nav;
