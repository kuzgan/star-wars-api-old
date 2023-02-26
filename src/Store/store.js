import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./nameSlice";
import { urlSlice } from "./urlSlice";

export const store = configureStore({
  reducer: {
    url: urlSlice.reducer,
    name: nameSlice.reducer,
  },
});
