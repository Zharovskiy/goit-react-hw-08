import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors.js";

export const selectMenu = (state) => state.contacts.menu;
export const selectIdForDelete = (state) => state.contacts.idDel;
export const selectModal = (state) => state.contacts.modal;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (selectContacts, selectNameFilter) => {
    return selectContacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(selectNameFilter.toLowerCase()) ||
        contact.number.includes(selectNameFilter)
      );
    });
  }
);
