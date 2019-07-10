import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPost.module.css';

const BlogPost = (props) => {

    //Props
    const { blogID } = props.match.params;

    return (
        <div className={styles.blogPost}>
            <h2>Blog Identifier: {blogID} </h2>
            <p> The entire blog content </p>
            <Link to="/blog"> Go back </Link>
        </div>
    );
}

export default BlogPost;