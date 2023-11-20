import React, { useState } from "react";
import classes from "./mobilemenu.module.css";
import NavbarItems from "./navbarItems";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const MobileMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={classes.nav_mobile}>
      <div className={classes.nav_mobile_label}>
        <NavbarItems label={"Browse"} />
        {showSidebar ? (
          <BsChevronUp
            size={20}
            className={classes.mobile_icons}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        ) : (
          <BsChevronDown
            size={20}
            className={classes.mobile_icons}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        )}
      </div>
      {showSidebar && (
        <div className={classes.mobile_menu}>
          <div className={classes.mobile_item}>
            <div className={classes.mobile_items}>
              <NavbarItems label={"Home"} />
            </div>
            <div className={classes.mobile_items}>
              <NavbarItems label={"Series"} />
            </div>
            <div className={classes.mobile_items}>
              <NavbarItems label={"Films"} />
            </div>
            <div className={classes.mobile_items}>
              <NavbarItems label={"New & Popular"} />
            </div>
            <div className={classes.mobile_items}>
              <NavbarItems label={"My List"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
