import React, { useEffect, useState } from "react";
import useSWR from "swr";
import classes from "./billboard.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const fetcher = async () => {
  try {
    const response = await fetch("/api/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
// async function fetchMovie() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/${
//       setMovie?.media_type === "tv" ? "tv" : "movie"
//     }/${setMovie?.id}?api_key=${
//       process.env.NEXT_PUBLIC_API_KEY
//     }&language=en-US&append_to_response=videos`
//   );
//   const data = await response.json();
//   setmovie(data);
//   console.log(data);

//   if (data?.videos) {
//     const index = data.videos.results.findIndex(
//       (item) => item.type === "Trailer"
//     );
//     setTrailer(data.videos?.results[index]?.key);
//   }
// }
// useEffect(() => {
//   if (!setMovie) return;
//   fetchMovie();
// }, [setMovie]);


const BillBoard = () => {
  const { data, error, isValidating } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnFocus: false,
  });

  const [movie, setMovie] = useState();
  useEffect(() => {
    if (data && data.movies && data.movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.movies.length);
      setMovie(data.movies[randomIndex]);
    }
  }, [data]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={classes.billboard_container}>
      <div className={classes.billboard_video}>
        <video
          className={classes.billboard_video_bg}
          autoPlay
          muted
          loop
          poster={movie?.thumbnailUrl}
          src={movie?.videoUrl}
        />
        <div className={classes.billboard_video_backdrop}></div>
      </div>
      <div className={classes.BillBoard_content}>
        <p>{movie?.title}</p>
        <p>{movie?.description}</p>

        <div className={classes.billboard_moreInfo}>
          <button className={classes.billboard_Play_btn}>
            <FaPlay size={16} style={{ marginRight: "0.4rem" }} /> Play
          </button>
          <button className={classes.billboard_Info_btn}>
            <AiOutlineInfoCircle size={20} style={{ marginRight: "0.5rem" }} />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
