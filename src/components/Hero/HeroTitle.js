import React from "react";

import { TextContainer } from "./Hero.styled";

const HeroTitle = ({ caption }) => {
  return (
    <TextContainer>

      <div>
      <span>
        <div
          style={{
            border: caption === "👋 HELLO" ? "none" : "2px solid white",
            padding: caption === "👋 HELLO" ? "0px" : "8px 12px 10px 12px",
          }}
        >
          {caption}
        </div>
      </span>
        <h1>Insights about my personal and work life, and the in-betweens</h1>
      </div>
    </TextContainer>
  );
};

export default HeroTitle;
