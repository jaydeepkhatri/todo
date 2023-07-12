import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    todos: todoSlice,
  },
});

export default store;