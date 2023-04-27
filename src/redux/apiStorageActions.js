import { createAsyncThunk } from '@reduxjs/toolkit';


const mockapiToken = 'https://64466788ee791e1e29fe21cb.mockapi.io';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${mockapiToken}/contacts`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('No data found.');
      }
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await fetch(`${mockapiToken}/contacts`, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(contact),
      });
      if (!response.ok) {
        throw new Error('Contact adding error.');
      }
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await fetch(`${mockapiToken}/contacts/${contactId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Contact deleting error.');
      }
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchContacts, addContact, deleteContact };
