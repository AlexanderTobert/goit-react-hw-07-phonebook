import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  
  initialState,
  
  reducers: {
    addContact: (state, action) => {
      const existingContact = state.contacts.find(contact => contact.name === action.payload.name);
      if (existingContact) {
        Notify.warning(`${action.payload.name} уже есть в контактах`);
      } else {
        state.contacts.push(action.payload);
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;