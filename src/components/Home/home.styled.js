import styled from "styled-components";

//NOTE: mobile first - see min-width for desktop

export const HomeMasterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const HomeBodyContainer = styled.div`
  max-width: 1250px;

  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 100%;
  min-width: 300px;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
`;

export const Column1 = styled.div`
  width: 100%;

  @media (min-width: 1300px) {
    width: 60%;
    max-width: 1000px;
  }
`;

export const Hero = styled.div`
  h1 {
    font-family: Roboto, sans-serif;
    color: #ff914d;
    font-size: 4rem;
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  p {
    font-family: Roboto, sans-serif;
    text-align: center;
    font-size: 1.6rem;
    margin: 0 0 30px 0;
    padding: 0;
    font-weight: bold;
  }
  @media (min-width: 1300px) {
    h1 {
      font-size: 10rem;
      text-align: left;
    }
    p {
      text-align: left;
      font-size: 1.75rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .btn1 {
    background: #ff914d;
    color: white;
    cursor: pointer;
    padding: 0.5em 2em;
    font-size: 1.4rem;
    margin: 0, 0.5em, 0, 0;
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
    padding: 0.5em 2em;
    font-size: 1.4rem;
    margin: 0 0 0 .5em;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      background-color: #ff914d;
      color: white;
      border: 1px solid white;
    }
  }
  @media (min-width: 1300px) {
    width: 50%
    height: auto;
    justify-content: flex-start;

  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .bullet-point {
    display: flex;
    align-items: center;
    margin: 10px 30px 10px 30px;
  }
  .bullet-text {
    font-size: 1.25rem;
    font-weight: lighter;
    text-align: left;
  }

  .listnum {
    display: flex;
    justify-content: center;
    background: #ff914d;
    color: white;
    min-width: 40px;
    height: 40px;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
    margin-right: 20px;
    font-weight: bold;
    border-radius: 5px;
  }
  @media (min-width: 1300px) {
    height: auto;
    width: 100%;
  align-items: flex-start;
    .list-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

    }
   }
  }
`;

export const Column2 = styled.div`
  display: none;

  @media (min-width: 1300px) {
    display: flex;
    flex-direction: center;
    width: 40%;

    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;
