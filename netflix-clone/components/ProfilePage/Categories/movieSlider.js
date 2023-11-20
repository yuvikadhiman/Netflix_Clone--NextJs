import React, { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Thumbnail from "./thumbnail"; 
import classes from "./categories.module.css";

const MovieSlider = ({ movie }) => {
  const rowRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = (direction) => {
    const container = rowRef.current;
    const scrollAmount = 200;

    if (container) {
      if (direction === "left") {
        setScrollPosition(scrollPosition - scrollAmount);
      } else if (direction === "right") {
        setScrollPosition(scrollPosition + scrollAmount);
      }
    }
  };

  return (
    <div className={classes.category_slide_section}>
      <BsChevronLeft
        className={classes.category_slide_lefticons}
        onClick={() => handleClick("left")}
      />
      <div
        className={classes.category_thumbnail}
        ref={rowRef}
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {movie.map((items) => (
          <Thumbnail key={items.id} movie={items}/>
        ))}
      </div>
      <BsChevronRight
        className={classes.category_slide_rigthicons}
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default MovieSlider;
