import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PROTOCOL = 'https';
const API_KEY = '65ba0f6fb4d53c066551f226';
const URL = 'mockapi.io/phonebook/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunckAPI) => {
    try {
      const response = await axios.get(
        `${PROTOCOL}://${API_KEY}.${URL}`
      );
      return response.data;
    } catch (error) {
      return thunckAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${PROTOCOL}://${API_KEY}.${URL}`,
        { ...data }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${PROTOCOL}://${API_KEY}.${URL}/${contactId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);