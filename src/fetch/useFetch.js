import { useState, useEffect } from 'react';

const useFetch = (option) => {
  const [resp, setResp] = useState();
  useEffect(() => {
    const fetchFunc = async () => {
      const res = await fetch('database.json');
      const dataAll = await res.json();
      setResp(dataAll[option]);
    };
    fetchFunc();
  }, []);
  return { resp };
};

export default useFetch;
