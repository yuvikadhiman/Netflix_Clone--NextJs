import React, { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import ReactPlayer from "react-player/lazy";
import classes from "./modal.module.css";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleMovieModal } from "../../../redux_features/movies/moviesSlice";
import { FaPlay, FaThumbsUp } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { RiThumbUpLine } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";

const MovieModal = () => {
  const dispatch = useDispatch();
  const { setMovie, showModel } = useSelector((store) => store.MovieModal);
  const [trailer, setTrailer] = useState("");
  const [movie, setmovie] = useState();
  const [like, setlike] = useState(false);
  const [addToWishlist, setaddToWishlist] = useState(false);

  async function fetchMovie() {
    const response = await fetch(
      `https://api.themoviedb.org/3/${
        setMovie?.media_type === "tv" ? "tv" : "movie"
      }/${setMovie?.id}?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&append_to_response=videos`
    );
    const data = await response.json();
    setmovie(data);
    console.log(data);

    if (data?.videos) {
      const index = data.videos.results.findIndex(
        (item) => item.type === "Trailer"
      );
      setTrailer(data.videos?.results[index]?.key);
    }
  }
  useEffect(() => {
    if (!setMovie) return;
    fetchMovie();
  }, [setMovie]);

  return (
    <MuiModal open={showModel} onClose={() => dispatch(toggleMovieModal())}>
      <section className={classes.modal_section}>
        <button
          className={classes.modal_btn}
          onClick={() => dispatch(toggleMovieModal())}
        >
          <RxCross1 size={15} />
        </button>
        <div className={classes.modal_videoPlayer}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            
          />
        </div>
        <div className={classes.modal_plays}>
          <button className={classes.play_btn}>
            <FaPlay size={20} /> Play
          </button>
          <button className={classes.wishlist_btn} >
            
            {addToWishlist ? (
              <CiCircleCheck size={20} />
            ) : (
              <BsPlusLg size={20} />
            )}
          </button>
          <button className={classes.like_btn} onClick={() => setlike(!like)}>
            {like ? <FaThumbsUp size={19} /> : <RiThumbUpLine size={19} />}
          </button>
        </div>
        <div className={classes.modal_description}>
          <div className={classes.modal_overview}>
            <div className={classes.modal_overview_content}>
              <p>{Math.round(movie?.vote_average * 10)}% Match</p>
              <p>{movie?.release_date || movie?.last_air_date}</p>
              <p>HD</p>
            </div>
            <p>{movie?.overview.substring(0, 150)}</p>
          </div>
          <div className={classes.modal__content}>
            <p>
              Genres{" "}
              <span>
                {" "}
                {movie?.genres.map((items) => items.name).join(", ")}
              </span>
            </p>
            <p>
              Original Language <span> {movie?.original_language}</span>
            </p>
            <p>
              Vote Average <span>{movie?.vote_average} </span>
            </p>
          </div>
        </div>
      </section>
    </MuiModal>
  );
};

export default MovieModal;
