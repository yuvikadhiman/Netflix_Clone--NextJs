import Questions from "@/components/HomePage/Questions/questions";
import FeaturedPosts from "@/components/HomePage/featuredPosts";
import Hero from "@/components/HomePage/hero";
import React, { Fragment } from "react";

const index = () => {
  return (
    <Fragment>
      <Hero/>
      <FeaturedPosts />
    </Fragment>
  );
};

export default index;
