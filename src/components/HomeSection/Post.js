import React from "react";
import { PostContainer, Textbox, PostTitle } from "./Home.styled";

const Post = ({ image, category }) => {
  return (
    <PostContainer>
      <div>
        <Textbox>
          <div>
            <span>{category}</span>
            <span>AUGUST 13, 2021</span>
          </div>
          <PostTitle>
            10 hillarious cartoons that depict real-life problems of programmers
          </PostTitle>
          <p>
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </p>
        </Textbox>
        <img src={image} alt="" />
      </div>
    </PostContainer>
  );
};

export default Post;
