import styles from './techNav.module.scss';
const TechNav = ({ handleNav, name }) => {
  return (
    <ul className={styles.wrapper}>
      <li
        data-name='Launch vehicle'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'Launch vehicle' ? styles.active : null
        }`}>
        1
      </li>
      <li
        data-name='Spaceport'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'Spaceport' ? styles.active : null
        }`}>
        2
      </li>
      <li
        data-name='Spase capsule'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'Spase capsule' ? styles.active : null
        }`}>
        3
      </li>
    </ul>
  );
};
export default TechNav;
