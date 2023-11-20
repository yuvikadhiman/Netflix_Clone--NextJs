import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    MovieModal: modalSlice,
  },
});
