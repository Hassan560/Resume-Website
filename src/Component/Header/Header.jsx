import React from "react";
import { Link } from "react-router-dom";
import DrawerHandler from "./Drawer";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="drawer">
        <DrawerHandler />
      </div>
      <div className="header__right">
        <Link to="/">
          <h2>CV</h2>
        </Link>
      </div>
      <div className="header__left">
        <Link to="/">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Education">Education</Link>
      </div>
    </div>
  );
}

export default Header;
