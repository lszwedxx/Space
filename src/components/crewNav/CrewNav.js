import styles from './crewNav.module.scss';
const CrewNav = ({ handleNav, name }) => {
  return (
    <nav>
      <ul className={styles.wrapper}>
        <li>
          <a
            data-name='Douglas Hurley'
            onClick={handleNav}
            className={`${styles.item} ${
              name === 'Douglas Hurley' ? styles.active : null
            }`}
            href='#'></a>
        </li>
        <li>
          <a
            data-name='Mark Shuttleworth'
            onClick={handleNav}
            className={`${styles.item} ${
              name === 'Mark Shuttleworth' ? styles.active : null
            }`}
            href='#'></a>
        </li>
        <li>
          <a
            data-name='Victor Glover'
            onClick={handleNav}
            className={`${styles.item} ${
              name === 'Victor Glover' ? styles.active : null
            }`}
            href='#'></a>
        </li>
        <li>
          <a
            data-name='Anousheh Ansari'
            onClick={handleNav}
            className={`${styles.item} ${
              name === 'Anousheh Ansari' ? styles.active : null
            }`}
            href='#'></a>
        </li>
      </ul>
    </nav>
  );
};
export default CrewNav;
