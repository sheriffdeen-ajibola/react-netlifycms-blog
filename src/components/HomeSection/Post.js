import React from "react";
import Footer from "../Footer/Footer";
import { PostContainer, Textbox, PostTitle } from "./Post.styled";
import { Link } from "react-router-dom";
const Post = ({ image, category, passData }) => {
  return (
    <PostContainer>
      <div>
        <Textbox>
          <div>
            <span>{category}</span>
            <span>AUGUST 13, 2021</span>
          </div>

          <Link to="./details" onClick={passData}>
            <PostTitle>
              10 hillarious cartoons that depict real-life problems of
              programmers
            </PostTitle>
          </Link>

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
