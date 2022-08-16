import React from "react";
import { Nav, Logo, Ul } from "./Hero.styled";
import { postTitle } from "../../image";
import { Link } from "react-router-dom";

const Navbar = ({ changeCaption, navigateLibrary, navigateCategory }) => {
  return (
    <Nav>
      <Logo>
        <img src={postTitle}></img>
      </Logo>
      <Ul>
        <li>
          <Link to="/Category" onClick={navigateCategory}>
            design tools
          </Link>
        </li>
        <li>
          <Link to="/Category" onClick={navigateCategory}>
            daily updates
          </Link>
        </li>
        <li>
          <Link to="/Category" onClick={navigateCategory}>
            tutorials
          </Link>
        </li>
        <li>
          <Link to="/library" onClick={navigateCategory}>
            library
          </Link>
        </li>
      </Ul>
      <span>subscribe</span>
    </Nav>
  );
};

export default Navbar;
