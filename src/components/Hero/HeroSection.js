import React, { useState } from "react";
import { Hero } from "./Hero.styled";
import HeroTitle from "./HeroTitle";
import Navbar from "./Navbar";

const HeroSection = ({ navigateLibrary, navigateCategory }) => {
  const [caption, setCaption] = useState("👋 HELLO");

  const handleCaption = (e) => {
    setCaption(e.target.innerText);
  };
  return (
    <Hero>
      <Navbar
        changeCaption={handleCaption}
        navigateLibrary={navigateLibrary}
        navigateCategory={navigateCategory}
      />
      <HeroTitle caption={caption} />
    </Hero>
  );
};

export default HeroSection;
