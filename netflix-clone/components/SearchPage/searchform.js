import React, { useRef } from "react";
import classes from "./searchform.module.css";
const BASE_URL = "https://api.themoviedb.org/3";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovie } from "@/redux_features/movies/moviesSlice";

const SearchForm = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const movie = searchText.current.value;

    e.preventDefault();
    try {
      const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_adult=false&language=en-US&query=${movie}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      dispatch(setSearchMovie({ data }));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className={classes.search_form} onSubmit={(e) => e.preventDefault()}>
      <div className={classes.search_form_control}>
        <input
          type="text"
          name="text"
          placeholder="Search Your Movie"
          ref={searchText}
        />
      </div>
      <button className={classes.search_form_btn} onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
