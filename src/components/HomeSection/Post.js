import React from "react";
import Footer from "../Footer/Footer";
import { PostContainer, Textbox, PostTitle } from "./Post.styled";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const Post = ({
  image,
  category,
  title,
  date,
  content,
  author,
  id,
  excerpt,
}) => {
  return (
    <PostContainer>
      <div>
        <Textbox>
          <div>
            <span>{category}</span>
            <span>{date}</span>
          </div>
          <Link to={`/blogs/${id}`}>
            <PostTitle>{title}</PostTitle>
          </Link>
          <span>
            <em>By {author}</em>
          </span>
          <p>{excerpt}</p>
        </Textbox>
        <img src={image} alt="post image" />
      </div>
    </PostContainer>
  );
};

export default Post;
