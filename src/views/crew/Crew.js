import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
const Crew = ({ size }) => {
  return (
    <>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      <h1>Crew</h1>;
    </>
  );
};

export default Crew;
