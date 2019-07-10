import React from 'react';
import styles from './Home.module.css';
import Card from '../../components/Card/Card';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {
    return (
        <div className={styles.home}>
            <Card title='Title 1'>
            <ContactForm />
            </Card>
        </div>
    );
}

export default Home;