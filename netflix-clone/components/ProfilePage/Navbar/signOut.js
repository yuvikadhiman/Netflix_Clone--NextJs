import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "next/image";
import classes from "./signout.module.css";
import { useSession, signOut } from "next-auth/react";

const SignOut = () => {
  const [showSignOut, setSignOut] = useState(false);
  const { data: session, status } = useSession();
  return (
    <>
      {showSignOut ? (
        <div className={classes.nav_signOut}>
          <BsChevronUp onClick={() => setSignOut(!showSignOut)} style={{cursor:'pointer'}}/>
          <div className={classes.nav_showSignOut}>
            <div className={classes.nav_showSignOut_content}>
              <div className={classes.nav_showSignOut_user}>
                <Image
                  className={classes.nav_profile_img}
                  src={session.user.image || "/images/profile.png"}
                  width={100}
                  height={100}
                />
                <p>{session.user.name}</p>
              </div>
              <p>{session.user.email}</p>
            </div>

            <button
              className={classes.nav_showSignOut_btn}
              onClick={() => signOut()}
            >
              Signout
            </button>
          </div>
        </div>
      ) : (
        <BsChevronDown onClick={() => setSignOut(!showSignOut)} style={{cursor:'pointer'}} />
      )}
    </>
  );
};

export default SignOut;
