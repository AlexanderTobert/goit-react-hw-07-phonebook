import React from 'react';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/api';
import { Notify } from 'notiflix';

const Contact = ({ id, name, number }) => {
  
  const dispatch = useDispatch();

  const handleContactDelete = () => {
    dispatch(deleteContact(id)).unwrap().then(Notify.success(`${name} удалён из списка контактов`));
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