import styled from "styled-components";
import colors from "../../Colors";

export const FooterBox = styled.footer`
  width: 60%;
  height: 352px;
  background-color: ${colors.navy};
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: -1;


  @media screen and (max-width: 900px){
   
  width: 99%;


}

  div {
    position: absolute;
    border: 25px solid #f7df61;
    height: 158px;
    width: 158px;
    border-radius: 50%;
    top: -96.1px;
    left: -93.47px;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 900;
  }

  p {
    margin-bottom: 40px;
    font-size: 1.125rem;
    font-weight: 500;
    color: #edfcf2;
  }

  & > * {
    font-family: "graphik";
  }

  form {
    height: 50px;
    width: 400px;
    display: flex;
    overflow: hidden;
    border-radius: 5px;

    @media screen and (max-width: 590px){
       width: 85%;
      }

    input {
      height: 100%;
      width: 62.5%;
      border: none;
      background-color: #fff;
      padding-left: 20px;
      font-size: 0.875rem;
      font-weight: 400;
    }
    button {
      height: 100%;
      width: 37.5%;
      border: none;
      background-color: ${colors.green};
      text-transform: uppercase;
      font-weight: 600;
      font-family: "graphik";
      color: ${colors.navy};
    }
  }
`;
