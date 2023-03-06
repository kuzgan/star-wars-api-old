import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: { value: "" },
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
    },
    changeToInitial: (state) => {
      state.value = "";
    },
  },
});

export const { changeName, changeToInitial } = nameSlice.actions;
