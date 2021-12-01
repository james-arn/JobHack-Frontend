import React from "react";
import styled from "styled-components";
import homeright from "./homeright.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomePage>
      <LeftSide>
        <LeftSideTop>
          <h1>Get Hired.</h1>
          <p>Hack into your first Junior Developer Job</p>
        </LeftSideTop>
        <LeftSideButtons>
          <Link to="/signup">
            <button className="btn1">Sign Up</button>
          </Link>
          <Link to="/signup">
            <button className="btn2">Log In</button>
          </Link>
        </LeftSideButtons>
        <LeftSideBottom>
          <ol>
            <li>
              <span className="listnum1">1</span>Sign Up or log in
            </li>
            <li>
              <span className="listnum">2</span>Find Junior Developer jobs all
              in one place
            </li>
            <li>
              <span className="listnum">3</span>Keep track & manage your
              applications
            </li>
          </ol>
        </LeftSideBottom>
      </LeftSide>
      <RightSide>
        <img src={homeright} alt=""></img>
      </RightSide>
    </HomePage>
  );
};

const HomePage = styled.div`
  /* background: grey; */
  height: 92.5vh;
  margin: 0;
  padding: 0;
  display: flex;
`;

const LeftSide = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const LeftSideTop = styled.div`
  width: 45vw;
  height: 35vh;
  /* background: yellow; */
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: orange;
    font-size: 6rem;
    text-align: center;
    margin-bottom: 0;
    text-shadow: 2px 2px #ff0000;
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 100px;
  }
`;

const LeftSideButtons = styled.div`
  height: 15vh;
  width: 45vw;
  display: flex;
  justify-content: space-around;
  .btn1 {
    background: orange;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 10px;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    height: 50px;
    width: 150px;
    font-size: 2rem;
  }
  .btn2 {
    background: white;
    color: orange;
    padding: 0.25rem 0.75rem;
    border-radius: 10px;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    height: 50px;
    width: 150px;
    font-size: 2rem;
    border: 1px solid orange;
  }
`;

const LeftSideBottom = styled.div`
  width: 45vw;
  height: 42.5vh;
  display: flex;
  justify-content: center;
  ol {
    list-style-type: none;
  }
  li {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 35px;
    line-height: 2rem;
  }
  .listnum {
    margin-right: 40px;
    background: orange;
    color: white;
    padding: 10px 15px;
    border-radius: 10px;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    font-size: 2rem;
  }
  .listnum1 {
    margin-right: 40px;
    background: orange;
    color: white;
    padding: 10px 17.5px;
    border-radius: 10px;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    font-size: 2rem;
  }
`;

const RightSide = styled.div`
  width: 55vw;
  height: 92.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background: green; */
  img {
    max-width: 70%;
    height: auto;
    object-fit: contain;
  }
`;

export default Home;
