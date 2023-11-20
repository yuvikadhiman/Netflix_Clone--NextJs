import React from "react";
import Link from "next/link";
import classes from "./ComponentStyles/hero.module.css";
import Logo from "./logo";
import Register from "./register";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={classes.mainheader}>
      <div className={classes.hero_bg}>
        <div className={classes.header}>
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <Link className={classes.btn} href="/auth">
              Sign In
            </Link>
          </nav>
        </div>
        <div className={classes.image}>
        <Image src="/images/homePage.jpg" width={1500} height={1500} />
      </div>
        <div className={classes.headerContent}>
          <h1>
            The biggest Indian hits. The best Indian stories. All streaming
            here.{" "}
          </h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Hero;
