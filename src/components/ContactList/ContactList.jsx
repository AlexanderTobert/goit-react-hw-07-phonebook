import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts, getError, getIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/api';
import Contact from '../Contact/Contact';
import { ThreeDots } from 'react-loader-spinner';
import css from './ContactList.module.css';


const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />}

      {error && <div> <p> {error} </p> </div>}

      <ul className={css.item}>
      {contacts?.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
    </div>
  );
};

export default ContactList;