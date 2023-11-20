import React from "react";
import SearchPage from "@/components/SearchPage/searchPage";
import { useSelector } from "react-redux";
import MovieModal from "@/components/ProfilePage/Modal/modal";

const search = () => {
  const { showModel } = useSelector((store) => store.MovieModal);

  return (
    <>
      <SearchPage />
      {showModel && <MovieModal />}
    </>
  );
};

export default search;
