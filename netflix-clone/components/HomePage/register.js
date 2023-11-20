import React from "react";
import classes from "./ComponentStyles/register.module.css";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";


const Register = () => {
  return (
    <div className={classes.register}>
      <h2>
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <form className={classes.form}>
        <div className={classes.control}>
          <input type="email" id="email" placeholder="Email address" />
        </div>
        <Link className={classes.btn} href="/auth">
          Get Started <AiOutlineRight className={classes.icon} />
        </Link>
      </form>
    </div>
  );
};

export default Register;
