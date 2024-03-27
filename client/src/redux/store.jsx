import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './features/tickets/ticketSlice';

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});

export default store;
