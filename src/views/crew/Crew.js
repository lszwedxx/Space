import { useState, useEffect } from 'react';
import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
import styles from './crew.module.scss';
import { anousheh, douglas, mark, victor } from '../../assets/crew/crew-imgs';
import CrewNav from '../../components/crewNav/CrewNav';
const Crew = ({ size }) => {
  const [destAll, setDestAll] = useState(null);
  const [dest, setDest] = useState(null);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState();
  const [actual, setActual] = useState();
  useEffect(() => {
    fetch('database.json')
      .then((res) => res.ok && res.json())
      .then((data) => setDestAll(data.crew))
      .catch((err) => setErr(err.message))
      .finally(() => {
        setLoad(false);
        if (!err) {
          setActual('Douglas Hurley');
        }
      });
  }, []);
  useEffect(() => {
    if (destAll) {
      setDest(destAll.filter((item) => item.name === actual));
    }
  }, [actual]);

  const handleNav = (e) => {
    const actNav = e.target.dataset.name;

    setActual(actNav);
  };
  const member =
    actual === 'Douglas Hurley'
      ? douglas
      : actual === 'Mark Shuttleworth'
      ? mark
      : actual === 'Victor Glover'
      ? victor
      : anousheh;
  return (
    <div className={styles.container}>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      {!load && err ? (
        <h1>Errror</h1>
      ) : (
        dest && (
          <>
            <p className={styles.subtitle}>
              <span>02</span>Meet your crew
            </p>
            <div className={styles.wrapper}>
              <img className={styles.member} src={member} alt='crew'></img>
              <section className={styles.content}>
                <p className={styles.function}>{dest[0].function}</p>
                <h2 className={styles.title}>{dest[0].name}</h2>
                <p className={styles.description}>{dest[0].description}</p>
                <CrewNav handleNav={handleNav} name={actual} />
              </section>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Crew;
