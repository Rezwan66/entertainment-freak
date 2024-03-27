import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {},
});

export default ticketSlice.reducer;