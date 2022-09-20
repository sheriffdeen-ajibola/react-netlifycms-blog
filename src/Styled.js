import styled from "styled-components";
import colors from "./Colors";

export const Container = styled.div`
  width: 60.7vw;
  box-sizing: border-box;
  min-height: 200px;
  margin: 0 auto;
  margin-bottom: 140px;

  &:last-child {
    margin-bottom: 160px;
  }
  @media screen and (max-width: 1400px){
    width: 70vw;
  }

  @media screen and (max-width: 1250px){
    width: 75vw;
  }

  @media screen and (max-width: 1100px){
   width: 90vw;
    
  }
`;

export const HeadingSec = styled.div`
  color: ${colors.navy};
  font-size: 2.25rem;
  font-weight: 900;
  font-family: "graphik";
  margin-bottom: 63px;
  text-transform: capitalize;

 
`;


export const Copyright = styled.div`
  width: 90vw;
  height: 58px;
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 0 auto;
  font-family: "graphik";
  border-top: 1px solid #efefef;
  margin-bottom: 40px;

  p {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${colors.navy};
  }
`;

export const HomeContainer = styled.div`
  margin-bottom: 160px;
`;
