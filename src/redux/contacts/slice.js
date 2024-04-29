import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts } from "../contacts/operation.js";
import { addContact } from "../contacts/operation.js";
import { deleteContact } from "../contacts/operation.js";
import { updateContact } from "../contacts/operation.js";
import toast from "react-hot-toast";

const initialState = {
  menu: false,
  idDel: null,
  modal: false,
  items: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    isOpenMenu(state, action) {
      state.menu = action.payload;
    },
    idForDelete(state, action) {
      state.idDel = action.payload;
    },
    isOpenModal(state, action) {
      state.modal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        toast("Contact added.");
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        toast("Contact deleted.");
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        // Перевірити роботу методу
        const index = state.items.indexOf(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { isOpenMenu, idForDelete, isOpenModal } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
