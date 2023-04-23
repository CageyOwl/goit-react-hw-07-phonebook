import { createSlice, nanoid } from '@reduxjs/toolkit';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const isInContacts = state.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase() ||
          contact.number === action.payload.number
      );
      if (isInContacts) {
        alert(`${action.payload.name} is already in contacts.`);
        return;
      }
      return [...state, { id: nanoid(), ...action.payload }];
    },
    removeContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
    clearContactsBook: state => (state.length = 0),
  },
});

export const { addContact, removeContact, clearContactsBook } =
  contactsSlice.actions;