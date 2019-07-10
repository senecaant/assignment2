import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const Blog = () => {
    return (
        <div className={styles.blog}>
            <h2>Blog page </h2>
            <section>
            <Link to="/blog/blogPost1"> Blog 1 </Link>
            </section>
            <section>
            <Link to="/blog/blogPost2"> Blog 2 </Link>
            </section>
        </div>
    );
}

export default Blog;