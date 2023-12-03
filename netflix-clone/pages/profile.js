import React from "react";
import FeaturedPosts from "@/components/HomePage/featuredPosts";
import BillBoard from "@/components/ProfilePage/Billboard/billBoard";
import Categories from "@/components/ProfilePage/Categories/categories";
import MovieModal from "@/components/ProfilePage/Modal/modal";
import Navbar from "@/components/ProfilePage/Navbar/navbar";
import requests from "@/utils/request";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";
import FullScreenReactPlayer from "@/components/ProfilePage/Modal/reactplayer";

const Profile = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {
  const { showModel, moviePlayer, trailer } = useSelector(
    (store) => store.MovieModal
  );
  return (
    <>
      <Navbar />
      <main>
        <BillBoard />
        <section>
          <Categories title={"trendingNow"} movie={trendingNow} />
          <Categories title={"topRated"} movie={topRated} />
          <Categories title={"netflixOriginals"} movie={netflixOriginals} />
          <Categories title={"actionMovies"} movie={actionMovies} />
          <Categories title={"comedyMovies"} movie={comedyMovies} />
          <Categories title={"horrorMovies"} movie={horrorMovies} />
          <Categories title={"romanceMovies"} movie={romanceMovies} />
          <Categories title={"documentaries"} movie={documentaries} />
        </section>
      </main>
      {moviePlayer && <FullScreenReactPlayer trailer={trailer} />}
      {showModel && <MovieModal />}
    </>
  );
};

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};

export default Profile;
