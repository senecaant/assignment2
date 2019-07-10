import React, { useState } from 'react';
import styles from './ContactForm.module.css';

//Components
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import TextArea from '../TextArea/TextArea';
import Modal from '../Modal/Modal';

const ContactForm = (props) => {

  //States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selection, setSelection] = useState('');
  const [textArea, setTextArea] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Methods
  const onNameChange = (name) => {
    setName(name);
  }

  const onEmailChange = (email) => {
    setEmail(email);
  }

  const onSelectChange = (select) => {
    setSelection(select);
  }

  const onTextAreaChange = (textArea) => {
    setTextArea(textArea);
  }

  const onSubmit = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.contactForm}>
      <h1>Tell us about yourself</h1>
      <Input onChange={onNameChange} placeholder="Name" />
      <Input onChange={onEmailChange} placeholder="Email" />
      <Select onChange={onSelectChange}>
        <option value="" disabled selected>What is your favorite color?</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Other">Other</option>
      </Select>
      <TextArea onChange={onTextAreaChange} placeholder="Why do you like this color?" rows={4} cols={50} />
      <Button onClick={onSubmit}> Submit</Button>
      <div className={isModalOpen ? ("") : (styles.closed)}>
        <Modal name={name} email={email} selection={selection} textArea={textArea} closeMethod={closeModal} />
      </div>
    </div>
  );
};

export default ContactForm;
