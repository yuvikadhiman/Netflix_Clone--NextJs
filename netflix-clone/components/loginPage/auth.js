import React from "react";
import classes from "./auth.module.css";
import Link from "next/link";
import Logo from "../HomePage/logo";
import Authform from "./authform";

const AuthPage = () => {
  return (
    <section className={classes.auth_section}>
      <div className={classes.auth_bg}>
        <div className={classes.header}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <Authform/>
      </div>
    </section>
  );
};

export default AuthPage;
