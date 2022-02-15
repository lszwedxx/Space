import styles from './crewNav.module.scss';
const CrewNav = ({ handleNav, name }) => {
  return (
    <ul className={styles.wrapper}>
      <li
        data-name='Douglas Hurley'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'Douglas Hurley' ? styles.active : null
        }`}></li>
      <li
        data-name='Mark Shuttleworth'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'Mark Shuttleworth' ? styles.active : null
        }`}></li>
      <li
        data-name='Victor Glover'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'Victor Glover' ? styles.active : null
        }`}></li>
      <li
        data-name='Anousheh Ansari'
        onClick={handleNav}
        className={`${styles.item} ${
          name === 'Anousheh Ansari' ? styles.active : null
        }`}></li>
    </ul>
  );
};
export default CrewNav;
