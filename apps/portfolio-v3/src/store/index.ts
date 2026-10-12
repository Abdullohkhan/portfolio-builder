import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
  },
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
