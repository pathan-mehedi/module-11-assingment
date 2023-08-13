import Link from 'next/link';
import styles from '../styles/home.module.css';
import fadeIn from '../styles/transitions.module.css';

const Home = () => {
  return (
    <div className={`${styles.content} ${fadeIn['fade-in']}`}>
      <h1>Welcome to Our Simple Blog</h1>
      <p>Explore our blog posts and learn something new!</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
