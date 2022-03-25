import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSelected: {},
  list: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    noteAdded(state, action) {
      state.list.push(action.payload);
    },
    noteRemove(state, action) {
      state.list = [...state.list.filter((x) => x.id !== action.payload)];
      return state;
    },
    noteEdit(state, action) {
      state.currentSelected = action.payload;
    },
    noteSaveEdit(state, action) {
      state.list = [...state.list.map(x => {
        if(x.id === action.payload.id) return { ...action.payload };
        return x;
      })];
    }
  },
});

export const { noteAdded, noteRemove, noteEdit, noteSaveEdit } = noteSlice.actions;
export default noteSlice.reducer;
