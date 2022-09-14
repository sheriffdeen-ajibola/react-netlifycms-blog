import styled from "styled-components";
import colors from "../../Colors";

export const PostContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 60px;

  @media screen and (max-width: 1100px){
   
        height: 205px;
   
   }
   @media screen and (max-width: 590px){
    height: 500px;
    
    
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ebf2fe;
  }

  & > * {
    font-family: "graphik";
    color: ${colors.navy};
  }

    & em {
      font-weight: 500;
      display: inline-block;
      margin-top: -50px;
      font-family: lobster;
      font-size:1.25rem;
    }

  & > div {
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1400px){
    gap: 40px;
  }
    
  @media screen and (max-width: 1250px){
    gap: 30px;
  }
  
  @media screen and (max-width: 1100px){
    gap: 20px;
    
  }

  @media screen and (max-width: 590px){
    height: 100%;
    flex-direction: column-reverse;

    
    
  }
   
}

    img {
     width: 30%;
     @media screen and (max-width: 590px){
    width: 100%;
    height: 50%;
    background-size: contain;
    
  }
    }

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      margin-top: 5px;

      @media screen and (max-width: 1250px){
        font-size: 16px;
   }
   @media screen and (max-width: 1100px){
        font-size: 14px;
   }

    

  }
    
  
`;

export const Textbox = styled.div`
  width: 62.8%;
  height: 100%;
  padding: 7px 0px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1100px){
    
    width: 65%
  }

  @media screen and (max-width: 590px){
    
    width: 100%;
  }
  

  & div {
    text-align: left;
  }

  & div a {
    color: ${colors.navy};
    margin-bottom: 7px;
    font-weight: 900;
    font-size: 28px;
    line-height: 130%;
    text-transform: capitalize;
    text-align: left;
    background-color: #fff;
  }

  & > div {
    display: flex;
    gap: 0;
    height: 34px;
    margin-bottom: 10px;
   
    @media screen and (max-width: 590px){
    
    width: 100%
  }

    

    span:last-child {
      font-weight: 600;
      background-color: #fff;
    }

   
    & > * {
      min-width: 50px;
      padding: 8px 12px 10px 12px;
      text-align: center;
      font-weight: 700;
      background-color: ${colors.blue};
      text-transform: uppercase;
      border-radius: 6px 0px 0px 6px;


      @media screen and (max-width: 590px){
    
        padding: 8px 6px 10px 6px;
  }
    }

  
  }
`;

export const PostTitle = styled.div`
  color: ${colors.navy};
  margin-bottom: 12px;
  font-weight: 900;
  font-size: 28px;
  line-height: 130%;
  text-transform: capitalize;
  text-align: left;
  background-color: #fff;

  @media screen and (max-width: 1300px){
  font-size: 25px;
}

@media screen and (max-width: 1100px){
        font-size: 20px;
        line-height: 110%;
   }
`;
