/** @format */

import React from "react";
import NavList from "../nav/nav-list";
import Logo from "../logo/logo";
import "./style.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <Logo />

          <NavList />
        </div>
      </header>
    </>
  );
};

export default Header;
