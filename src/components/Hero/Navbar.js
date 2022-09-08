import React from "react";
import { Nav, Logo, Ul } from "./Hero.styled";
import { postTitle } from "../../image";
import { Link } from "react-router-dom";
import { menu } from "../../image";
import { useParams } from "react-router-dom";



const Navbar = ({ changeCaption, navigateLibrary, navigateCategory, category, setCategory}) => {
  // const catArray = ['design tools', 'daily updates', 'tutorials']

  const changeCategory = (e) => {
    setCategory(e.target.textContent)
    console.log(e.tartget.textContent)
    
      }

 
  return (
    <Nav>
      <Logo>
        <img src={postTitle}></img>
      </Logo>
      <Ul>
        <li>
          <Link to={`/categories/${category}`} onClick={changeCategory}>
            design tools
          </Link>
        </li>
        <li>
          <Link to={`/categories/${category}`} onClick={changeCategory}>
            daily updates
          </Link>
        </li>
        <li>
          <Link to={`/categories/${category}`} onClick={changeCategory}>
            tutorials
          </Link>
        </li>
        <li>
          <Link to="/library" >
            library
          </Link>
        </li>
      </Ul>
      <span>subscribe</span>
      
       
      
    </Nav>
  );
};

export default Navbar;
