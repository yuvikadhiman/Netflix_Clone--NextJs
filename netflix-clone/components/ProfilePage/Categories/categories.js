import classes from "./categories.module.css";
import MovieSlider from "./movieSlider";

const Categories = ({ title, movie }) => {
  return (
    <div className={classes.category_container}>
      <h2 className={classes.category_title}>{title}</h2>
       <MovieSlider movie={movie}/>
    </div>
  );
};

export default Categories;
