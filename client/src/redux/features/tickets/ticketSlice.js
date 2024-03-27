import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticketCount: 100
};

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        }
    },
});

export const { increment, decrement } = ticketSlice.actions;

export default ticketSlice.reducer;