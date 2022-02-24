import { useState, useEffect } from 'react';
import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
import styles from './tech.module.scss';
import TechNav from '../../components/techNav/TechNav';
import Error from '../../components/error/Error';
import {
  vehicleLand,
  vehiclePort,
  spacePort,
  spaceLand,
  spaceportLand,
  spaceportPort,
} from '../../assets/technology/tech-imgs';
const Tech = ({ size }) => {
  const [destAll, setDestAll] = useState(null);
  const [dest, setDest] = useState(null);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(false);
  const [actual, setActual] = useState();
  useEffect(() => {
    fetch('database.json')
      .then((res) => res.ok && res.json())
      .then((data) => setDestAll(data.technology))
      .catch((err) => setErr(err.message))
      .finally(() => {
        setLoad(false);
        if (!err) {
          setActual('Launch vehicle');
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
  const shipLand =
    actual === 'Launch vehicle'
      ? vehicleLand
      : actual === 'Spaceport'
      ? spaceportLand
      : spaceLand;
  const shipPort =
    actual === 'Launch vehicle'
      ? vehiclePort
      : actual === 'Spaceport'
      ? spaceportPort
      : spacePort;
  return (
    <div className={styles.container}>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      {!load && err ? (
        <Error err={'api'} />
      ) : dest ? (
        <>
          <p className={styles.subtitle}>
            <span>03</span>Space Launch 101
          </p>
          <div className={styles.wrapper}>
            <img
              className={styles.space}
              src={size >= 1024 ? shipPort : shipLand}
              alt='vehicle'></img>
            <TechNav handleNav={handleNav} name={actual} />
            <section className={styles.content}>
              <p className={styles.addText}>The terminology...</p>
              <h2 className={styles.title}>{dest[0].name}</h2>
              <p className={styles.description}>{dest[0].description}</p>
            </section>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Tech;
