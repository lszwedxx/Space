import styles from './destNav.module.scss';
const DestNav = (props) => {
  const { handleNav, name } = props;
  return (
    <nav>
      <ul className={styles.wrapper}>
        <li
          onClick={handleNav}
          className={`${styles.item} ${
            name === 'moon' ? styles.active : null
          }`}>
          <a href='#'>Moon</a>
        </li>
        <li
          onClick={handleNav}
          className={`${styles.item} ${
            name === 'mars' ? styles.active : null
          }`}>
          <a href='#'>Mars</a>
        </li>
        <li
          onClick={handleNav}
          className={`${styles.item} ${
            name === 'europa' ? styles.active : null
          }`}>
          <a href='#'>Europa</a>
        </li>
        <li
          onClick={handleNav}
          className={`${styles.item} ${
            name === 'titan' ? styles.active : null
          }`}>
          <a href='#'>Titan</a>
        </li>
      </ul>
    </nav>
  );
};

export default DestNav;
