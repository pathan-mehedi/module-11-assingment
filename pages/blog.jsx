import { useState } from "react";
import "../styles/globals.css";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/blog.module.css";
import fadeIn from "../styles/transitions.module.css";
import ReactPaginate from "react-paginate";

import blogData from "../data/blogData.json";

const Blog = () => {
    const postsPerPage = 5; // Number of posts per page
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    const filteredPosts = blogData.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <div className={`${styles.pageContainer} ${fadeIn["fade-in"]}`}>
            <Header />
            <div className={styles.content}>
                <h1 className={styles.title}>Blog Posts</h1>
                <div className={styles.searchBar}>
                    <input
                        type='text'
                        placeholder='Search posts...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button className={styles.searchButton}>Search</button>
                </div>
                <div className={styles.postList}>
                    {currentPosts.map((post) => (
                        <div className={styles["post-link"]} key={post.id}>
                            <Link href={`/${post.id}`} passHref>
                                <div>
                                    <h2>{post.title}</h2>
                                    <p>{post.content.slice(0, 80)}...</p>
                                    <Link href={`/${post.id}`}>
                                        <div className={styles["readMore_btn"]}>Read More&nbsp; &#8594;</div>
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName={`${styles.paginationContainer} ${styles.paginationContainerCustom}`}
                        pageClassName={styles.paginationPage}
                        previousLinkClassName={styles.paginationLink}
                        nextLinkClassName={styles.paginationLink}
                        disabledClassName={styles.paginationDisabled}
                        activeClassName={styles.paginationActive}
                    />
                </div>
                <div className={styles.backButton}>
                    <Link href='/' passHref>
                        <div className={styles["back-link"]}>
                            &#8592; &nbsp;Back to Home
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
