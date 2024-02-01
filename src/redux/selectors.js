import { createSelector } from '@reduxjs/toolkit';

export const getContacts = store => store.phonebook.contacts.items;
export const getFilter = store => store.phonebook.filter;
export const getIsLoading = store => store.phonebook.contacts.isLoading;
export const getError = store => store.phonebook.contacts.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);