import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
const Tech = ({ size }) => {
  return (
    <>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      <h1>Dest</h1>;
    </>
  );
};

export default Tech;
