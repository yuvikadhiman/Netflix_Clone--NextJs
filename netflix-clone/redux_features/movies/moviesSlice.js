import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModel: false,
  setMovie: null,
  searchMovie: null,
  moviePlayer: false,
  trailer: null,
};
const modalSlice = createSlice({
  name: "MovieModal",
  initialState,
  reducers: {
    setmovieModal: (state) => {
      state.showModel = true;
    },
    setCurrentMovie: (state, { payload }) => {
      const { movie } = payload;
      state.setMovie = movie;
    },
    toggleMovieModal: (state) => {
      state.showModel = !state.showModel;
    },
    setSearchMovie: (state, { payload }) => {
      const { data } = payload;
      state.searchMovie = data.results;
      console.log(state.searchMovie);
    },
    setmoviePlayer: (state) => {
      state.moviePlayer = !state.moviePlayer;
      state.showModel = false;
    },
    settrailer: (state, { payload }) => {
      state.trailer = payload;
    },
  },
});
export const {
  setmovieModal,
  setCurrentMovie,
  toggleMovieModal,
  setSearchMovie,
  setmoviePlayer,
  settrailer,
} = modalSlice.actions;
export default modalSlice.reducer;
