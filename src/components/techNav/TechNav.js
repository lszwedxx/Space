import styles from './techNav.module.scss';
const TechNav = ({ handleNav, name }) => {
  return (
    <ul className={styles.wrapper}>
      <li
        className={`${styles.item} ${
          name === 'Launch vehicle' ? styles.active : null
        }`}>
        <a data-name='Launch vehicle' onClick={handleNav} href='#'>
          1
        </a>
      </li>
      <li
        className={`${styles.item} ${
          name === 'Spaceport' ? styles.active : null
        }`}>
        <a data-name='Spaceport' onClick={handleNav} href='#'>
          2
        </a>
      </li>
      <li
        className={`${styles.item} ${
          name === 'Spase capsule' ? styles.active : null
        }`}>
        <a data-name='Spase capsule' onClick={handleNav} href='#'>
          3
        </a>
      </li>
    </ul>
  );
};
export default TechNav;
