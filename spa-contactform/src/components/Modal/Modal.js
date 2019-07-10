import React, { useState } from 'react';
import styles from './Modal.module.css';

//Components
import Button from '../Button/Button';

const Modal = (props) => {

    //Props
    const {name, email, selection, textArea, closeMethod} = props;

    const onClick = () => {
        closeMethod();
      }

    return (
        <div className={styles.modal}>
            <div class={styles.content}>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Favorite Color: {selection}</p>
                <p>Reason: {textArea}</p>
                <Button onClick={onClick}> Close</Button>
            </div>
        </div>
    );
};

export default Modal;