import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "../contacts/operation.js";
import { addContact } from "../contacts/operation.js";
import { deleteContact } from "../contacts/operation.js";
import { updateContact } from "../contacts/operation.js";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  extraReducers: (builder) => {
    builder
      // Отримання контактів
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      // Додавання контакту
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      // Видалення контакту
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      // Зміна контакту
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;

        // Перевірити роботу методу
        const index = state.items.indexOf(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
