import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
  updateContact,
} from './Operations';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoading = false;
    },
    [addContacts.pending]: state => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [deleteContacts.pending]: state => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [updateContact.pending]: state => {
      state.isLoading = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(el => el.id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
