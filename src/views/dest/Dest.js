import { useState, useEffect } from 'react';
import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
import styles from './dest.module.scss';
import DestNav from '../../components/destNav/DestNav';
import Error from '../../components/error/Error';
import { moon, mars, europa, titan } from '../../assets/destination/dest-imgs';
const Dest = ({ size }) => {
  const [destAll, setDestAll] = useState(null);
  const [dest, setDest] = useState(null);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState();
  const [actual, setActual] = useState();
  useEffect(() => {
    fetch('database.json')
      .then((res) => res.ok && res.json())
      .then((data) => setDestAll(data.destinations))
      .catch((err) => setErr(err.message))
      .finally(() => {
        setLoad(false);
        if (!err) {
          setActual('moon');
        }
      });
  }, []);
  useEffect(() => {
    if (destAll) {
      setDest(destAll.filter((item) => item.name === actual));
    }
  }, [actual]);
  const handleNav = (e) => {
    setActual(e.target.textContent.toLowerCase());
  };
  const planet =
    actual === 'moon'
      ? moon
      : actual === 'mars'
      ? mars
      : actual === 'europa'
      ? europa
      : titan;
  return (
    <div className={styles.container}>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      {!load && err ? (
        <Error />
      ) : dest ? (
        <>
          <p className={styles.subtitle}>
            <span>01</span>Pick your destination
          </p>
          <div className={styles.wrapper}>
            <img className={styles.planet} src={planet} alt='planet'></img>
            <section className={styles.content}>
              <DestNav handleNav={handleNav} name={actual} />
              <h2 className={styles.title}>{dest[0].name}</h2>
              <p className={styles.description}>{dest[0].description}</p>
              <div className={styles.paramsWrapper}>
                <div className={styles.params}>
                  <p className={styles.paramTitle}>Avg. distance</p>
                  <p className={styles.param}>{dest[0].distance}</p>
                </div>
                <div className={styles.params}>
                  <p className={styles.paramTitle}>Est. travel time</p>
                  <p className={styles.param}>{dest[0].time}</p>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Dest;
