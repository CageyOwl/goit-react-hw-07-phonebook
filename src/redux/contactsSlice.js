import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './apiStorageActions';


const handlePending = (state) => {
  state.isLoading = true;
}
const handleRejection = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: handleRejection,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.error = null;
      state.isLoading = false;
    },
    [addContact.rejected]: handleRejection,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload.id);
      state.error = null;
      state.isLoading = false;
    },
    [deleteContact.rejected]: handleRejection,
  },
});