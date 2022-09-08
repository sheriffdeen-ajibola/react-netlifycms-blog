import React, { useState } from "react";
import { Container, Copyright, HeadingSec } from "./Styled";
import Footer from "./components/Footer/Footer";
import Post from "./components/HomeSection/Post";
import { CategoryContainer, Btndv, Button } from "./components/Categories/categories.styled";
import postlist from './posts.json'
import { useParams } from "react-router-dom";

const Categories = () => {
  const [pagination, setPagination] = useState(6);
  const handlePagination = () => {
    setPagination((num) => num + 3);
  };
  const excerptList = postlist.map((post, i) => {
    return post.content.split(" ").slice(0, 15).join(" ");
  });

  const {category} = useParams();
  console.log(category)
 
  return (
    <CategoryContainer>
      <>
        <Container>
          <HeadingSec>{category}</HeadingSec>
          {postlist &&
           postlist.filter((post, i) => post.category === `${category}\r`)
            .slice(0, `${pagination}`)
            .map((post, i) => (
              <Post  category={post.category}
              title={post.title}
              date={post.date}
              author={post.author}
              content={excerptList[i]}
              image={post.image}
              id={post.id} />
            ))}
        </Container>

        <Btndv>
          <Button onClick={handlePagination}>more articles</Button>
        </Btndv>
      </>
      <div>
        <Footer />
      </div>
      <Copyright>
        <p>Copyright 2021 - Elikem Daniel</p>
      </Copyright>
    </CategoryContainer>
  );
};

export default Categories;
