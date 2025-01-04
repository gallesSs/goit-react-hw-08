import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
// export const selectNameFilter = state => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], (contacts, contactFilter) => {

    return contacts.filter((contact) => {
      if (typeof contact.name === "string") {
        return contact.name.toLowerCase().includes(contactFilter?.toLowerCase())
      }
      return false;
    });
  });

