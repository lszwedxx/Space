import styles from './destNav.module.scss';
const DestNav = (props) => {
  const { handleNav, name } = props;
  return (
    <ul className={styles.wrapper}>
      <li
        tabIndex='0'
        onClick={handleNav}
        className={`${styles.item} ${name === 'moon' ? styles.active : null}`}>
        Moon
      </li>
      <li
        tabIndex='0'
        onClick={handleNav}
        className={`${styles.item} ${name === 'mars' ? styles.active : null}`}>
        Mars
      </li>
      <li
        tabIndex='0'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'europa' ? styles.active : null
        }`}>
        Europa
      </li>
      <li
        tabIndex='0'
        onClick={handleNav}
        className={`${styles.item} ${name === 'titan' ? styles.active : null}`}>
        Titan
      </li>
    </ul>
  );
};

export default DestNav;
