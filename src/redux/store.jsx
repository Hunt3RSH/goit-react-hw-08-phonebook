import { configureStore } from '@reduxjs/toolkit';
import { myContactsSlice } from './contacts/slice';

export const store = configureStore({
  reducer: { contacts: myContactsSlice.reducer },
});
