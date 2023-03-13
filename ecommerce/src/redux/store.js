import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';

export default configureStore({
  reducer: {
    carts:CartSlice
  },
});