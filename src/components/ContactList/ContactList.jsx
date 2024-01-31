import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';


const ContactList = () => {
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const contactsForRender = !filter ? contacts : filteredContacts;

  return (
    <ul className={css.item}>
      {contactsForRender?.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};

export default ContactList;