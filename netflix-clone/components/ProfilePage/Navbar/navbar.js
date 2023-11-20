import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";
import Logo from "../../HomePage/logo";
import NavbarItems from "./navbarItems";
import { BsSearch, BsBellFill } from "react-icons/bs";
import MobileMenu from "./mobileMenu";
import Image from "next/image";
import SignOut from "./signOut";
import { useRouter } from "next/router";



const TOP_OFFSET = 120;
const Navbar = () => {
 const router=useRouter()
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${showBackground ? classes.nav_bg : classes.nav}`}>
        <div className={classes.nav_logo}>
          <Link href="/">
            <Logo />
          </Link>
          <MobileMenu />
          <div className={classes.nav_labels}>
            <NavbarItems label={"Home"} link="/profile" />
            <NavbarItems label={"Series"} link="/series" />
            <NavbarItems label={"Films"} link="/films" />
            <NavbarItems label={"New & Popular"} link="/new&popular" />
            <NavbarItems label={"My List"} link="/mylist" />
          </div>
        </div>
        <div className={classes.nav_labels_icons}>
          <BsSearch onClick={()=>router.push('/search')} style={{cursor:'pointer'}}/>
          <BsBellFill />
          <Image
            className={classes.nav_profile_img}
            src={"/images/profile.png"}
            width={100}
            height={100}
          />
          <SignOut  />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
