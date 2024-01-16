import React from 'react'
import Image from "next/image";
import classes from "../ComponentStyles/featuredPosts.module.css";

const FeatureTile3 = () => {
  return (
    <div className={classes.post}>
    <div className={classes.post_Content}>
      <h1> Watch everywhere</h1>
      <p>
        Stream unlimited movies and TV shows on your phone, tablet, laptop,
        and TV.
      </p>
    </div>
    <div className={classes.post3_video}>
      <Image src="/images/device.png" width={600} height={500} />
      <video
        playsInline
        muted
        loop
        autoPlay
        preload="none"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
      />
    </div>
  </div>
  )
}

export default FeatureTile3
