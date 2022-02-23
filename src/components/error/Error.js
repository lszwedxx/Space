import styles from './error.module.scss';
import err from '../../assets/err/err.jpg';
const Error = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ups... something bad has happened</h2>
      <img src={err} alt='error'></img>
    </section>
  );
};

export default Error;
