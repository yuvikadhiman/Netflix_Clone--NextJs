import React from 'react'
import classes from "../loginPage/auth.module.css";
import Link from "next/link";
import Logo from "../HomePage/logo";
import SearchForm from './searchform';
import MovieSuggestions from './movieSuggestions';

const SearchPage = () => {
  return (
    <section >
    <div className={classes.auth_bg}>
      <div className={classes.header}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <SearchForm/>
      <MovieSuggestions/>
    </div>
  </section>
  )
}

export default SearchPage
