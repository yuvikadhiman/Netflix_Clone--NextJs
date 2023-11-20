import React from "react";
import classes from "./navbar.module.css";


const NavbarItems = ({ label, link }) => {
  return (
    <a href={link} className={classes.nav_items}>
      {label}
    </a>
  );
};

export default NavbarItems;
