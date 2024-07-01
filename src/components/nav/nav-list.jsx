/** @format */

import React from "react";
import navData from "../../constant/nav-data";
import NavItem from "./nav-item";

const NavList = () => {
  return (
    <>
      <nav>
        <ul>
          {navData.map((nav) => (
            <li key={nav.id}>
              <NavItem titleProp={nav.title} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavList;
