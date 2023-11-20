import React from 'react'
import Image from "next/image";
import classes from "../ComponentStyles/featuredPosts.module.css";

const FeatureTile4 = () => {
  return (
    <div className={classes.post}>
        <div>
          <Image src="/images/children.png" width={600} height={500} />
        </div>
        <div className={classes.post_Content}>
          <h1> Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
  )
}

export default FeatureTile4
