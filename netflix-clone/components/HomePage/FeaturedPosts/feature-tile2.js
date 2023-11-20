import React from 'react'
import Image from "next/image";
import classes from "../ComponentStyles/featuredPosts.module.css";

const FeatureTile2 = () => {
  return (
    <div className={classes.post}>
    <div>
      <Image src="/images/mobile.jpg" width={600} height={400} />
    </div>
    <div className={classes.post_Content}>
      <h1>Download your shows to watch offline</h1>
      <p>Save your favourites easily and always have something to watch.</p>
    </div>
  </div>
  )
}

export default FeatureTile2
