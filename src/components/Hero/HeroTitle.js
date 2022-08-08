import React from "react";
import { hello } from "../../image";

import { TextContainer } from "./Hero.styled";

const HeroTitle = () => {
  return (
    <TextContainer>
      <span>
        <img src={hello} alt="" />
      </span>
      <div>
        <h1>Insights about my personal and work life, and the in-betweens</h1>
      </div>
    </TextContainer>
  );
};

export default HeroTitle;
