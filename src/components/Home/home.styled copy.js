import styled from "styled-components";

export const HomePage = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 0;
  height:100vh;

  .hero {
    display: flex;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  height: 100vh;
  margin-top: 20vh;
  margin-left: 100px;
  
  @media only screen and (max-width: 860px) {
    margin: 20vh 0;
    margin-left: 30px;

    h1 {
      font-size: 6rem;
    }
  }
`;

export const LeftSideTop = styled.div`
  width: 100%;
  h1 {
    font-family: Roboto, sans-serif;
    color: #ff914d;
    font-size: 9em;
    text-align: left;
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  p {
    font-family: Roboto, sans-serif;
    text-align: left;
    font-size: 1.6rem;
    margin: 0 0 50px 0;
    padding: 0;
    font-weight: bold;
  }
  @media only screen and (max-width: 860px) {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`;

export const LeftSideButtons = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 50px 0;

  .btn1 {
    background: #ff914d;
    color: white;
    cursor: pointer;
    padding: 1em 2.5em;
    font-size: 1.4rem;
    margin: 0;
    border: 1px solid #ff914d;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      background-color: white;
      color: #ff914d;
      border: 1px solid #ff914d;
    }
  }
  .btn2 {
    background: white;
    color: #ff914d;
    cursor: pointer;
    border: 1px solid orange;
    padding: 1em 2.5em;
    font-size: 1.4rem;
    margin: 0 0 0 1em;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      background-color: #ff914d;
      color: white;
      border: 1px solid white;
    }
  }
  @media only screen and (max-width: 860px) {
    width: 100vw;
    height: auto;
    margin-left: 250px;
  }
`;

export const LeftSideBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ol {
    list-style-type: none;
  }
  .bullet-point {
    display: flex;
    align-items: center;
  }
  .bullet-text {
    align-items: center;
    font-size: 1.5em;
    font-weight: lighter;
  }

  .listnum {
    display: flex;
    justify-content: center;
    background: #ff914d;
    color: white;
    width: 50px;
    height: 50px;
    align-items: center;
    text-align: center;
    font-size: 3em;
    margin-right: 20px;
    font-weight: bold;
    border-radius: 5px;
  }
  @media only screen and (max-width: 860px) {
    height: auto;
    width: 100%;
    margin-top: 50px;
  }

  @media only screen and (max-width: 470px) {
    .bullet-text {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

export const RightSide = styled.div`
  width: 55vw;
  height: 92.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .img-hero {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media only screen and (max-width: 860px) {
    display: none;
  }
`;
