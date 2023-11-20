import React, { useState } from "react";
import classes from "./thumbnail.module.css";
import { baseUrl } from "@/constants/movie";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setmovieModal,
  setCurrentMovie,
} from "../../../redux_features/movies/moviesSlice";
const Thumbnail = ({ movie }) => {
  const dispatch = useDispatch();
  const ModalHandler = () => {
    dispatch(setmovieModal());
    dispatch(setCurrentMovie({ movie }));
  };

  return (
    <section
      key={movie?.id}
      className={classes.thumbail_section}
      onClick={ModalHandler}
    >
      <Image
        className={classes.thumbail_image}
        src={`${baseUrl}/${movie?.poster_path || movie?.backdrop_path}`}
        width={500}
        height={500}
      />
    </section>
  );
};

export default Thumbnail;
