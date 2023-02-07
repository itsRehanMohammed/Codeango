import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.key_word !== action.payload);
    },
  },
});

export const { add, remove } = savedSlice.actions;
export default savedSlice.reducer;
