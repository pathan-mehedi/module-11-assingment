import { useRouter } from 'next/router';
import styles from '../styles/post.module.css';
import fadeIn from '../styles/transitions.module.css';

import blogData from '../data/blogData.json';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={`${styles.content} ${fadeIn['fade-in']}`}>
      <h1>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.postContent}>{post.content}</div>
    </div>
  );
};

export default Post;
