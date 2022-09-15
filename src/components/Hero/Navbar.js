import React, { useState, useEffect } from "react";
import { Nav, Logo, Ul } from "./Hero.styled";
import { postTitle } from "../../image";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../Colors";



const Hamburger = styled.div`
display: none;

@media screen and (max-width: 900px){
display: block;
}
`

const Menulabel = styled.label`
background-color:white;
position: fixed;
cursor: pointer;
z-index: 1000;
top: 2.3rem;
right: 6rem;
border-radius: 50%;
height: 5rem;
width: 5rem;
text-align: center;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
@media screen and (max-width: 700px){
  right: 5rem;
}
@media screen and (max-width: 600px){
  right: 4rem;
}
@media screen and (max-width: 500px){
  right: 3rem;
}
@media screen and (max-width: 400px){
  right: 2rem;
}
`
const NavBackground = styled.div`
position: fixed;
top: 2.3rem;
right: 5rem;
background-image: radial-gradient(
  ${colors.navy},
  #0000ae
);
height: 5rem;
width: 5rem;
border-radius: 50%;


transform: ${props=> ( props.clicked ? "scale(80)" : "scale(0)")};
transition: transform .5s;
`
const Icon = styled.div`
position: relative;
background-color:${props => (props.clicked ? "transparent" : `${colors.navy}`)};
transition: all .3s;
width: 3rem;
height: 2px;
display: inline-block;
margin-top: 2.5rem;


&::before, &::after{
  content: "";
  background-color: ${colors.navy};
  width: 3rem;
  height: 2px;
  display: inline-block;

  position: absolute;
  left: 0;
  transition: all .3s;

}

&::before{
  top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
  transform:${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  
}

&::after{
  top: ${(props) => (props.clicked ? "0" : "0.8rem")};

  transform:${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};

}


`

const Navigation = styled.nav`
height: 100vh;
position: fixed;
top: 0;right: 0;

width: ${props => props.clicked ? '100%': '0'};
opacity: ${props => props.clicked ? '1': '0'};

transition: all .5s;
`

const List = styled.ul`
position: absolute;
list-style: none;
top: 50%;left: 50%;
transform  : translate(-50%,-50%);
text-align: center;
width: 100%;
@media screen and (max-width: 600px){
  transform  : translate(-55%,-55%);
}


`
const Itemlink = styled(Link)`
display: inline-block;
font-size: 3rem;
font-weight: 300;
text-decoration: none;
color: ${colors.blue};
padding: 1rem 2rem ;
background-image: linear-gradient(
  120deg,
  transparent 0%, transparent 50%,#fff 50%
);
background-size: 240%;
transition: all .4s;


&:hover,
&:active {
  background-position: 100%;
  color: ${colors.navy};
  transform: translateX(1rem);

}
`

const Navbar = ({ category, setCategory}) => {
  
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

useEffect(()=>console.log(category) ,[category])


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
      
     
      <Hamburger>
        <Menulabel htmlFor='navi-toggle' onClick={handleClick}>
          <Icon clicked={click}>&nbsp;</Icon>
        </Menulabel>
       <NavBackground clicked={click}></NavBackground>


       <Navigation clicked={click}>
          <List>
          <li>
              <Itemlink onClick={handleClick} to='/'>
                 home
              </Itemlink>
            </li>
            <li onClick={handleClick}>
              <Itemlink   to={`/categories/${category}`} onClick={changeCategory}>
                design tools
              </Itemlink>
            </li>
            <li  onClick={handleClick}>
              <Itemlink  to={`/categories/${category}`} onClick={changeCategory}>
                daily updates
              </Itemlink>
            </li>
            <li  onClick={handleClick}>
              <Itemlink to={`/categories/${category}`} onClick={changeCategory}  >
                tutorials
             </Itemlink>
            </li>
            <li>
              <Itemlink onClick={handleClick} to='/library'>
                 Library
              </Itemlink>
            </li>
            <li>
              <Itemlink onClick={handleClick} to='/'>
                 Subscribe
              </Itemlink>
            </li>
          </List>

       </Navigation>
      </Hamburger>
     
      
    </Nav>
  );
};

export default Navbar;
