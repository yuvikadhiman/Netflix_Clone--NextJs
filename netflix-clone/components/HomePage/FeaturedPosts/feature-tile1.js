import React from 'react'
import classes from "../ComponentStyles/featuredPosts.module.css";
import Image from "next/image";

const FeatureTile1 = () => {
  return (
    <div className={classes.post}>
    <div className={classes.post1_Content}>
      <h1>Enjoy on your TV</h1>
      <p>
        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
        players and more.
      </p>
    </div>
    <div className={classes.post_video}>
      <Image
        className={classes.img}
        src="/images/tv.png"
        width={600}
        height={400}
      />

      <video
        playsInline
        muted
        loop
        autoPlay
        preload="none"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
      />
    </div>
  </div>
  )
}

export default FeatureTile1
