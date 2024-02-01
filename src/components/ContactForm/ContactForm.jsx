import React, { useState } from 'react';
import { Notify } from 'notiflix';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/api';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = formData;

    if (isNaN(number)) {
      Notify.warning('Пожалуйста, введите корректный номер.');
      return;
    }

    if (/\d/.test(name)) {
      Notify.warning('Имя не должно содержать цифры.');
      return;
    }

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      Notify.failure(`Контакт ${name} уже существует.`);
      return;
    }

    const formattedData = {
      name,
      number: Number(number),
      id: nanoid(),
    };

    dispatch(addContact(formattedData).unwrap().then(Notify.success(`${name} успешно добавлен в контакты`)));
    setFormData({ name: '', number: '' });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel} htmlFor="name">
        <span>Name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formLabel} htmlFor="number">
        <span>Number:</span>
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default ContactForm;