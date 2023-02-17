import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
  name: "url",
  initialState: { value: { url: "" } },
  reducers: {
    changeUrl: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeUrl } = urlSlice.actions;
