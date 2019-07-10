import React from 'react';
import styles from './Header.module.css';
//import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Assignment 2 - Anthony</h1>
        </header>

    );
}

export default Header;





/*
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
*/