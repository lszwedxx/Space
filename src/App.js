import Home from './views/home/Home';
import Dest from './views/dest/Dest';
import Crew from './views/crew/Crew';
import Tech from './views/tech/Tech';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [size, setSize] = useState(null);
  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home size={size} />} />
          <Route path='destination' element={<Dest size={size} />} />
          <Route path='crew' element={<Crew size={size} />} />
          <Route path='technology' element={<Tech size={size} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
