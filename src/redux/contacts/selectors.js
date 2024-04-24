import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors.js";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (selectContacts, selectNameFilter) => {
    return selectContacts.filter((contact) =>
      contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
    );
  }
);
