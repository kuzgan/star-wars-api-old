import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };
export const nameSlice = createSlice({
  name: "name",
  initialState,
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
