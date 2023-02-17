import { configureStore } from "@reduxjs/toolkit";
import { urlSlice } from "./urlSlice";

export const store = configureStore({
  reducer: {
    url: urlSlice.reducer,
  },
});
