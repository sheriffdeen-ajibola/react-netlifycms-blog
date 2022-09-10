import HeroSection from "./components/Hero/HeroSection";
import GlobalStyle from "./Global";
import postlist from "./posts.json";
import React from "react";
import { useState } from "react";
import { HeadingSec, Container, HomeContainer, Copyright } from "./Styled";
import Post from "./components/HomeSection/Post";
import Footer from "./components/Footer/Footer";
import Library from "./components/Library/Library";
import Categories from "./components/Categories/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./components/Details/DetailsPage";


function App() {
  const [category, setCategory] = useState("design tools");

  // const [pageData, setPageData] = useState({});

  // const handleNavigateCategory = (e) => {
  //   setCategory(e.target.textContent);
  // };

  // const handlePassData = (id) => {
  //   const pageInfo = posts;

  //   pageInfo.forEach((post) => {
  //     if (post.id === id) {
  //       setPageData({ ...post });
  //     }
  //   });
  // };
  const excerptList = postlist.map((post, i) => {
    return post.content.split(" ").slice(0, 15).join(" ");
  });
  return (
    <div className="App ">
      <GlobalStyle />

      <BrowserRouter>
        <HeroSection setCategory={setCategory} category={category} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeContainer>
                  <Container>
                    <HeadingSec>Design tools</HeadingSec>
                    {postlist &&
                      postlist.map((post, i) => (
                        <Post
                          category={post.category}
                          title={post.title}
                          date={post.date}
                          author={post.author}
                          content={excerptList[i]}
                          image={post.image}
                          id={post.id}
                        />
                      ))}
                  </Container>

                  {/* <Container>
                    <HeadingSec>weekly updates</HeadingSec>
                    {posts
                      .filter((post) => post.category === "weekly updates")
                      .slice(0, 3)
                      .map((post) => (
                        <Post image={post.image} category={post.category} />
                      ))}
                  </Container>

                  <Container>
                    <HeadingSec>tutorials</HeadingSec>
                    {posts
                      .filter((post) => post.category === "tutorials")
                      .slice(0, 3)
                      .map((post) => (
                        <Post
                          image={post.image}
                          category={post.category}
                          passData={() => handlePassData(post.id)}
                        />
                      ))}
                  </Container> */}
                </HomeContainer>
                <div>
                  <Footer />
                </div>
                <Copyright>
                  <p>Copyright 2021 - Sheriffdeen Ajibola</p>
                </Copyright>
              </>
            }
          />
          <Route path="/library" element={<Library />} />
          <Route
            path="/categories/:category"
            element={<Categories setCategory={setCategory} category={category} />}
          />

          {/* <Route
            path="/category/dailyupdates"
            element={<Categories category={category} />}
          />

          <Route
            path="/category/tutorials"
            element={<Categories category={category} />}
          />
 */}


          <Route
            path="/blogs/:title"
            element={<DetailsPage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
