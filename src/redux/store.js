// Libraries
import { configureStore } from '@reduxjs/toolkit';
// Custom Functions
import piReducer from './piSlice';

const store = configureStore({
  reducer: {
    pi: piReducer,
  },
});

export default store;
