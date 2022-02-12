import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
const Home = ({ size }) => {
  return (
    <>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      <h1>Home</h1>;
    </>
  );
};

export default Home;
