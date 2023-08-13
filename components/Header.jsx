import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <div className={styles.logo}>MTS Sample Blog</div>
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
