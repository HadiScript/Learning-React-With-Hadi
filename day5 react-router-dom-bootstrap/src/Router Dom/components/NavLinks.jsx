import React from "react";
import { Link, useLocation } from "react-router-dom";
import useLink from "./useLink";




const NavLinks = () => {
  const { pathname } = useLocation();
  const { whatsMyName } = useLink();

  return (
    <>
      <br />
      <div style={{ display: "flex", gap: "5px" }}>
        <Link style={{ color: whatsMyName("/") ? "black" : "red" }} to="/">
          Home
        </Link>
        <Link style={{ color: whatsMyName("/about") ? "black" : "red" }} to="/about">
          About
        </Link>
      </div>
    </>
  );
};

export default NavLinks;
