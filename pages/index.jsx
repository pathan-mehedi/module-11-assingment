import '../styles/globals.css';
import Header from '../components/Header';
import styles from '../styles/home.module.css';
import fadeIn from '../styles/transitions.module.css';

const Home = () => {
  return (
    <div className={`${styles.pageContainer} ${fadeIn['fade-in']}`}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to MTS Sample Blog</h1>
        <p className={styles.subtitle}>
          Explore our blog, learn about our team, and stay updated with the latest tech trends.
        </p>
      </div>
    </div>
  );
};

export default Home;
