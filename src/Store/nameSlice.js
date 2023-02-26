import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: { value: { name: "" } },
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeUrl } = nameSlice.actions;
