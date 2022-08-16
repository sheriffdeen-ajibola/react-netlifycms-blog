import React from "react";
import Footer from "../Footer/Footer";
import { PostContainer, Textbox, PostTitle } from "./Post.styled";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const Post = ({ image, category, passData, title, date, content }) => {
  return (
    <PostContainer>
      <div>
        <Textbox>
          <div>
            <span>{category}</span>
            <span>{date}</span>
          </div>

          <Link to="./postdetails" onClick={passData}>
            <PostTitle>{title}</PostTitle>
          </Link>

          <p>
            <Markdown children={content} escapeHTML={false} />
          </p>
        </Textbox>
        <img src={image} alt="post image" />
      </div>
    </PostContainer>
  );
};

export default Post;
