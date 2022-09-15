import styled from "styled-components";
import colors from "../../Colors";

export const LibraryContainer = styled.div`
  /* width: 970px; */
  min-height: 2003.33px;
  font-family: "graphik";
  color: ${colors.navy};
  font-weight: 700;
  text-transform: capitalize;
  font-size: 36px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 120.67px;
  
  width: 60.7vw;
  box-sizing: border-box;
  /* min-height: 200px; */
  /* margin: 0 auto; */
  /* margin-bottom: 140px; */
  @media screen and (max-width: 1400px){
    width: 70vw;
  }

  @media screen and (max-width: 1250px){
    width: 75vw;
  }

  @media screen and (max-width: 1100px){
   width: 90vw;
    
  }
  

  div {
    width: 100%;
    p {
      font-size: 1rem;
      margin-bottom: 40px;
     
   

  @media screen and (max-width: 900px){
  text-align: center;
    
  }
    }
  }
`;

export const FlexContainer = styled.div`
  width: 970px;
  min-height: 283.33px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 80.67px;
  @media screen and (max-width: 900px){
   justify-content: center;
  }

  img {
    width: 212.4px;
    height: 283.33px;
  }
`;
