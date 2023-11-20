import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "@/constants/movie";
const BASE_URL = "https://api.themoviedb.org/3";
import classes from "../SearchPage/search.module.css";
import SearchMovieThumbnail from "./searchMovieThumbnail";

const GptMovieSuggestions = () => {
  const { searchMovie } = useSelector((store) => store.MovieModal);
  return (
    <section className={classes.searchMovie_section}>
      {searchMovie &&
        searchMovie.map((items) => <SearchMovieThumbnail key={items.id} movie={items} />)}
    </section>
  );
};

export default GptMovieSuggestions;
