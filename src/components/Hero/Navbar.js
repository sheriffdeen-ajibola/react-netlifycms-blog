import React from "react";
import { Nav, Logo, Ul } from "./Hero.styled";
import { postTitle } from "../../image";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={postTitle}></img>
      </Logo>
      <Ul>
        <li>design tools</li>
        <li>daily updates</li>
        <li>tutorials</li>
        <li>library</li>
      </Ul>
      <span>subscribe</span>
    </Nav>
  );
};

export default Navbar;
