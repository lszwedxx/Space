import NavMobile from '../../components/nav/NavMobile';
import NavDesktop from '../../components/nav/NavDesktop';
import styles from './home.module.scss';
const Home = ({ size }) => {
  return (
    <div className={styles.wrapper}>
      {size >= 768 ? <NavDesktop /> : <NavMobile />}
      <div className={styles.wrapContent}>
        <section className={styles.content}>
          <p className={styles.subtitle}>So, you want to travel to</p>
          <h1 className={styles.title}>Space</h1>
          <p className={styles.textContent}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <button className={styles.btn}>Explore</button>
      </div>
    </div>
  );
};

export default Home;
