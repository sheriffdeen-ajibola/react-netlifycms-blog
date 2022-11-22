import styled from "styled-components";

import colors from "../../Colors";

export const Hero = styled.div`
  width: 99%;
  height: 555px;
  background-color: ${colors.navy};
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 100px;
  box-sizing: inherit;

  @media screen and (max-width: 1400px) {
    height: 500px;
  }

  @media screen and (max-width: 1250px) {
    height: 455px;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 900px) {
    height: 60vh;
    margin-bottom: 50px;

    border-radius: 0px 0px 10px 10px;
  }
`;

export const Nav = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 120px;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito Sans";
  text-transform: capitalize;
  margin-bottom: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 1500px) {
    width: 1200px;
  }
  @media screen and (max-width: 1270px) {
    width: 950px;
  }
  @media screen and (max-width: 1000px) {
    width: 750px;
  }
  @media screen and (max-width: 900px) {
    width: 80vw;
  }

  span {
    width: 108px;
    height: 36px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-sizing: border-box;
    font-family: "graphik";
    font-size: 0.875rem;
    font-weight: 500;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  height: 25px;
  width: 483px;
  justify-content: space-between;
  padding: 0;
  @media screen and (max-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    width: 400px;
  }

  li {
    color: ${colors.white};
    font-size: 1.125rem;
    font-weight: 500;
    list-style: none;
    font-family: "Graphik";
    cursor: pointer;

    a {
      text-decoration: none;
      color: white;
    }
  }

  li:not(:last-chiild) {
    margin-right: 40px;
  }
`;

export const Logo = styled.div`
  img {
    width: 93.93px;
    height: 18px;
  }
`;

export const TextContainer = styled.div`
  background-color: transparent;
  height: 430px;
  width: 60.7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Nunito Sans";
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 25px;
  /* background: red; */

  @media screen and (max-width: 1400px) {
    width: 70vw;
    height: 60%;
  }

  @media screen and (max-width: 1250px) {
    width: 75vw;
  }

  @media screen and (max-width: 1100px) {
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 590px) {
    width: 90vw;
  }

  h1 {
    font-size: 3.3rem;
    font-weight: 900;
    color: #fff;
    font-family: "graphik";
    width: 100%;
    @media screen and (max-width: 1100px) {
      font-size: 2.8rem;
      text-align: center;
    }

    @media screen and (max-width: 590px) {
      font-size: 2rem;
    }
  }

  & span div {
    font-size: 1.2rem;
    font-family: "graphik";
    font-weight: 600;
    color: #fff;
    border-radius: 6px;
    padding: 8px 12px 10px 12px;
    box-sizing: border-box;
  }
  & > * {
    box-sizing: border-box;
  }

  /* @media screen and (max-width: 1000px){
  text-align: center;
  width: 850px;

} */
`;
