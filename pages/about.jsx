import '../styles/global.css';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/about.module.css';
import fadeIn from '../styles/transitions.module.css';

const About = () => {
  return (
    <div className={`${styles.pageContainer} ${fadeIn['fade-in']}`}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.paragraph}>
          Welcome to our blog! We are a passionate team of developers...
        </p>
        <p className={styles.paragraph}>Learn more about us and our journey.</p>
        <div className={styles.backButton}>
          <Link href="/" passHref>
            <div className={styles['back-link']}>Back to Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
