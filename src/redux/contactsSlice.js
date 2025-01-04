import {createSelector, createSlice, isAnyOf} from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from './contactsOps.js';
import {selectFilter} from './filtersSlice.js';

const initialState = {
  items: [{name: 'John', number: '+380999999999'}],
  loading: false,
  error: null,
};

const slice = createSlice({
name: "contacts",
  initialState,

  extraReducers: (builder) => {
  builder.addCase(fetchContacts.fulfilled, (state, action) => {
    state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.unshift(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    })
    .addMatcher(
      isAnyOf(addContact.pending, deleteContact.pending, fetchContacts.pending),
      (state) => {
        state.loading = true;
      }
    )
    .addMatcher(
      isAnyOf(addContact.fulfilled, deleteContact.fulfilled, fetchContacts.fulfilled),
      (state) => {
        state.loading = false;
      }
    )
    .addMatcher(
      isAnyOf(addContact.rejected, deleteContact.rejected, fetchContacts.rejected),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  }
})


export const selectContacts = (state) => state.contacts.items
export const contactsReducer = slice.reducer;
export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filters) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));
})