import styles from './error.module.scss';
import errImg from '../../assets/err/err.jpg';
const Error = ({ err }) => {
  return (
    <section className={`${err === 'api' ? styles.api : styles.container}`}>
      <h2 className={styles.title}>Ups... something bad has happened</h2>
      <img src={errImg} alt='error'></img>
    </section>
  );
};

export default Error;
