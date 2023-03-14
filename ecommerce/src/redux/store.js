import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';

export default configureStore({
  reducer: {
    carts:cartSlice
  },
});