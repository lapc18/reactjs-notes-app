import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {}
});

export default noteSlice.reducer;