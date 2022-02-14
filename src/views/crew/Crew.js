import { useState, useEffect } from 'react';
import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
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
  return (
    <>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      <h1>Crew</h1>;
    </>
  );
};

export default Crew;
