import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    loadPerson: (state, action) => {
      state.info = action.payload;
    },
    unloadPerson: (state) => {
      state.info = null;
    },
  },
});

export const { loadPerson, unloadPerson } = personSlice.actions;
export default personSlice.reducer;
