import HeroSection from "./components/Hero/HeroSection";
import GlobalStyle from "./Global";
import postlist from "./posts.json";
import React from "react";
import { useState } from "react";
import { HeadingSec, Container, HomeContainer, Copyright } from "./Styled";
import Post from "./components/HomeSection/Post";
import Footer from "./components/Footer/Footer";
import Library from "./components/Library/Library";
import posts from "./components/Array";
import Categories from "./components/Categories/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./components/Details/DetailsPage";

function App() {
  const [category, setCategory] = useState("");

  const [pageData, setPageData] = useState({});

  const handleNavigateCategory = (e) => {
    setCategory(e.target.textContent);
  };

  const handlePassData = (id) => {
    const pageInfo = posts;

    pageInfo.forEach((post) => {
      if (post.id === id) {
        setPageData({ ...post });
      }
    });
  };
  const excerptList = postlist.map((post, i) => {
    return post.content.split(" ").slice(0, 15).join(" ");
  });
  return (
    <div className="App ">
      <GlobalStyle />

      <BrowserRouter>
        <HeroSection navigateCategory={(e) => handleNavigateCategory(e)} />

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
                  <p>Copyright 2021 - Elikem Daniel</p>
                </Copyright>
              </>
            }
          />
          <Route path="/library" element={<Library />} />
          <Route
            path="/category"
            element={<Categories category={category} />}
          />
          <Route
            path="/postdetails"
            element={<DetailsPage data={pageData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
