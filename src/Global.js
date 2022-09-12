import { createGlobalStyle } from "styled-components";
import graphikBold from "./fonts/GraphikBold.otf";
import graphikSemibold from "./fonts/GraphikSemibold.otf";
import graphikMedium from "./fonts/GraphikMedium.otf";
import graphikRegular from "./fonts/GraphikRegular.otf";
import graphikLight from "./fonts/GraphikLight.otf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'graphik';
    src: url(${graphikBold}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikSemibold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikMedium}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikRegular}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikLight}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
 
  a{
    text-decoration: none;
    font-style: none;

    &:active,&:visited{
      color: white;
    }
    
  }

  body{
    padding: 0;
    margin: 0;
  }

  *{
    font-family: 'graphik' 
  }

  @media screen and (max-width: 1400px){
    html{
font-size: 15px;
    }

    @media screen and (max-width: 1250px){
    html{
font-size: 14px;
    }
   

    

  }
    @media screen and (max-width: 1100px){
    html{
font-size: 12px;
    }
    
  }



`;

export default GlobalStyle;
