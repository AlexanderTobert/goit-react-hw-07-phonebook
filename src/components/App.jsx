import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './main.module.css';

const App = () => {
  
  return (
    <section className={css.sectionItem}>
      <h2 style={{ fontSize: '2em', fontWeight: 700, marginBottom: '10px' }}>Phone number</h2>
      <ContactForm />

      <h2 style={{ fontSize: '2em', fontWeight: 700, marginBottom: '10px' }}>Contacts</h2>

      <Filter />
      <ContactList />
    </section>
  );
};

export default App;