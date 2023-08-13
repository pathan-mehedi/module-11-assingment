import '../styles/global.css';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/blog.module.css';
import fadeIn from '../styles/transitions.module.css';

import blogData from '../data/blogData.json';

const Blog = () => {
  return (
    <div className={`${styles.pageContainer} ${fadeIn['fade-in']}`}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Blog Posts</h1>
        <div className={styles.postList}>
          {blogData.map((post) => (
            <Link href={`/${post.id}`} key={post.id} passHref>
              <div className={styles['post-link']}>{post.title}</div>
            </Link>
          ))}
        </div>
        <div className={styles.backButton}>
          <Link href="/" passHref>
            <div className={styles['back-link']}>Back to Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
