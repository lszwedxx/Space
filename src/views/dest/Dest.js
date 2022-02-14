import { useState, useEffect } from 'react';
import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
import useFetch from '../../fetch/useFetch.js';
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
  return (
    <>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      {!load && err ? <h1>Errror</h1> : <h1>Dest</h1>}
    </>
  );
};

export default Dest;
