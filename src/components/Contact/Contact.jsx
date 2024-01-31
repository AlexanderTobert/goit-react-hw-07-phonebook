import React from 'react';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  
  const dispatch = useDispatch();

  const handleContactDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item} key={id}>
      <p>{name}: {number}</p>
      <button type="button" onClick={handleContactDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;