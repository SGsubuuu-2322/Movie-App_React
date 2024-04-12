import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadTv: (state, action) => {
      state.info = action.payload;
    },
    unloadTv: (state) => {
      state.info = null;
    },
  },
});

export const { loadTv, unloadTv } = tvSlice.actions;
export default tvSlice.reducer;
