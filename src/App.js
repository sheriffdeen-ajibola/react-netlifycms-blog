import HeroSection from "./components/Hero/HeroSection";
import { createGlobalStyle } from "styled-components";
import graphikBold from "./fonts/GraphikBold.otf";
import graphikSemibold from "./fonts/GraphikSemibold.otf";
import graphikMedium from "./fonts/GraphikMedium.otf";
import graphikRegular from "./fonts/GraphikRegular.otf";
import graphikLight from "./fonts/GraphikLight.otf";
import React from "react";
import { useState } from "react";
import {
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
  thumbnail9,
} from "./image";
import { HeadingSec, Container, Space, Copyright } from "./Styled";
import Post from "./components/HomeSection/Post";
import Footer from "./components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'graphik';
    src: url(${graphikBold}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikSemibold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikMedium}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikRegular}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'graphik';
    src: url(${graphikLight}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  h1 {
    font-family: 'graphik';
  }

`;

function App() {
  const [posts, setPosts] = useState([
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "tutorials",
      date: "august 13, 2021.",
      image: `${thumbnail7}`,
      id: 1,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "design tools",
      date: "august 13, 2021.",
      image: `${thumbnail1}`,
      id: 2,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "tutorials",
      date: "august 13, 2021.",
      image: `${thumbnail8}`,
      id: 3,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "weekly updates",
      date: "august 13, 2021.",
      image: `${thumbnail4}`,
      id: 4,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "weekly updates",
      date: "august 13, 2021.",
      image: `${thumbnail5}`,
      id: 5,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "tutorials",
      date: "august 13, 2021.",
      image: `${thumbnail9}`,
      id: 6,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "design tools",
      date: "august 13, 2021.",
      image: `${thumbnail2}`,
      id: 7,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "design tools",
      date: "august 13, 2021.",
      image: `${thumbnail3}`,
      id: 8,
    },
    {
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      body: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
      category: "weekly updates",
      date: "august 13, 2021.",
      image: `${thumbnail6}`,
      id: 9,
    },
  ]);

  return (
    <div className="App ">
      <GlobalStyle />
      <HeroSection />
      <Container>
        <HeadingSec>Design tools</HeadingSec>
        {posts
          .filter((post) => post.category === "design tools")
          .map((post) => (
            <Post image={post.image} category={post.category} />
          ))}

        <Space></Space>

        <HeadingSec>weekly updates</HeadingSec>
        {posts
          .filter((post) => post.category === "weekly updates")
          .map((post) => (
            <Post image={post.image} category={post.category} />
          ))}

        <Space></Space>

        <HeadingSec>tutorials</HeadingSec>
        {posts
          .filter((post) => post.category === "tutorials")
          .map((post) => (
            <Post image={post.image} category={post.category} />
          ))}
      </Container>

      <Footer />

      <Copyright>
        <p>Copyright 2021 - Elikem Daniel</p>
      </Copyright>
    </div>
  );
}

export default App;
