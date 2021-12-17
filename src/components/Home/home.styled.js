import styled from "styled-components";

//NOTE: mobile first - see min-width for desktop
export const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

export const Column1 = styled.div`
  width: 100%;
  background: pink;

  @media (min-width: 750px) {
    width: 50%;
    background: blue;
  }
`;

export const Hero = styled.div`
  h1 {
    font-family: Roboto, sans-serif;
    color: #ff914d;
    font-size: 4em;
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
`;

export const Buttons = styled.div``;

export const List = styled.div``;

export const Column2 = styled.div`
  display: none;
  background: red;
  width: 50%;

  @media screen (min-width: 700px) {
    display: flex;
    width: 100%;
    background: red;
  }
`;
