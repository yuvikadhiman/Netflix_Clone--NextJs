import React from "react";
import classes from "./ComponentStyles/featuredPosts.module.css";
import Questions from "./Questions/questions";
import Register from "./register";
import FeatureTile1 from "./FeaturedPosts/feature-tile1";
import FeatureTile2 from "./FeaturedPosts/feature-tile2";
import FeatureTile3 from "./FeaturedPosts/feature-tile3";
import FeatureTile4 from "./FeaturedPosts/feature-tile4";

const FeaturedPosts = () => {
  return (
    <section className={classes.featuredPosts}>
      <hr />
      <FeatureTile1 />
      <hr />
      <FeatureTile2 />
      <hr />
      <FeatureTile3 />
      <hr />
      <FeatureTile4 />
      <hr />
      <Questions />
      <div className={classes.register_post}>
        <Register />
      </div>
      <hr />
    </section>
  );
};

export default FeaturedPosts;
