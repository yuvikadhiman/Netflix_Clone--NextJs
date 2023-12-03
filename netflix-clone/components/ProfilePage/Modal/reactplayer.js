import React from "react";
import MuiModal from "@mui/material/Modal";
import classes from "./reactplayer.module.css";
import ReactPlayer from "react-player/lazy";
import { useDispatch, useSelector } from "react-redux";
import { setmoviePlayer } from "../../../redux_features/movies/moviesSlice";
import { RxCross1 } from "react-icons/rx";

const FullScreenReactPlayer = ({ trailer }) => {
  const dispatch = useDispatch();
  const { moviePlayer } = useSelector((store) => store.MovieModal || {});
 
  return (
    <MuiModal open={moviePlayer} onClose={() => dispatch(setmoviePlayer())}>
      <div className={classes.modal_videoPlayer_fullscreen}>
         <button
            className={classes.exist_btn}
            onClick={() => dispatch(setmoviePlayer())}
          >
            <RxCross1 size={25} />
          </button>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          playing
          controls
        />
      </div>
    </MuiModal>
  );
};

export default FullScreenReactPlayer;
