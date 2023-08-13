import Link from 'next/link';
import styles from '../styles/about.module.css';
import fadeIn from '../styles/transitions.module.css';

const About = () => {
  return (
    <div className={`${styles.content} ${fadeIn['fade-in']}`}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.paragraph}>
        Welcome to our blog! We are a passionate team of developers...
      </p>
      <p className={styles.paragraph}>Learn more about us and our journey.</p>
      <Link href="/" passHref>
        <div className={styles.link}>Go back to Home</div>
      </Link>
    </div>
  );
};

export default About;
