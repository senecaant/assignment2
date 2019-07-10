import React from 'react';
import styles from './Loading.module.css';
import loadingAnim from './loading-anim.gif'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loadingAnim} alt=""/>
        </div>
    );
};

export default Loading;