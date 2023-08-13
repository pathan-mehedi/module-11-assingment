import Link from 'next/link';
import styles from '../styles/blog.module.css';
import fadeIn from '../styles/transitions.module.css';

import blogData from '../data/blogData.json';

const Blog = () => {
  return (
    <div className={`${styles.content} ${fadeIn['fade-in']}`}>
      <h1>Blog Posts</h1>
      <div className={styles.postList}>
        {blogData.map((post) => (
          <Link href={`/${post.id}`} key={post.id} passHref>
            <div className={styles['post-link']}>{post.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
