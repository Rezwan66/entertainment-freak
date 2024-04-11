import { configureStore } from '@reduxjs/toolkit';
// import ticketReducer from './features/tickets/ticketSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
