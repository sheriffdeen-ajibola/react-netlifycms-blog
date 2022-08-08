import React from "react";
import { Hero } from "./Hero.styled";
import HeroTitle from "./HeroTitle";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <Hero>
      <Navbar />
      <HeroTitle />
    </Hero>
  );
};

export default HeroSection;
