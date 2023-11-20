import React from "react";
import classes from "./search.module.css";
import { baseUrl } from "@/constants/movie";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setmovieModal,
  setCurrentMovie,
} from "../../redux_features/movies/moviesSlice";

const SearchMovieThumbnail = ({ movie }) => {
  const dispatch = useDispatch();
  
  const ModalHandler = () => {
    dispatch(setmovieModal());
    dispatch(setCurrentMovie({ movie }));
  };
  return (
    <section key={movie?.id} onClick={ModalHandler}>
      <Image
        className={classes.thumbail_image}
        src={`${baseUrl}/${movie?.poster_path || movie?.backdrop_path}`}
        width={900}
        height={900}
      />
    </section>
  );
};

export default SearchMovieThumbnail;
