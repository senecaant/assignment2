import React from 'react';
import styles from './About.module.css';
import Card from '../../components/Card/Card';
import picture from './picture.jpg'

const About = () => {
    return (
        <div className={styles.home}>
            <img src={picture} alt="" />
        </div>
    );
}

export default About;

////<Card title="About Me" text="This is about me" imageLink="https://i.stack.imgur.com/ILTQq.png"/>