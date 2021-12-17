import React from "react";
import homeright from "./homeright.svg";
import { Link } from "react-router-dom";
import "./home.css";
import { Navbar } from "../Navbar/Navbar";
import {
  Buttons,
  Column1,
  Column2,
  Hero,
  HomeContainer,
  List,
} from "./home.styled";

const Home = ({ user, logOutHandler }) => {
  return (
    <div>
      <Navbar user={user} logOutHandler={logOutHandler} />
      <HomeContainer>
        <Column1>
          <Hero>
            <h1>Get Hired.</h1>
            <p>Hack into your first Junior Developer Job.</p>
          </Hero>
          <Buttons>
            <Link to="/signup">
              <button className="btn1">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn2">Log In</button>
            </Link>
          </Buttons>
          <List>
            <div className="bullet-point">
              <div className="listnum">1</div>
              <h4 className="bullet-text">Sign Up Or Log In</h4>
            </div>
            <div className="bullet-point">
              <div className="listnum">2</div>
              <h4 className="bullet-text">
                Find Junior Developer jobs all in one place
              </h4>
            </div>
            <div className="bullet-point">
              <div className="listnum">
                <p style={{ textAlign: "center" }}>3</p>
              </div>
              <h4 className="bullet-text">
                Keep track & manage your applications
              </h4>
            </div>
          </List>
        </Column1>
        <Column2>
          <img src={homeright} alt="" />
        </Column2>
      </HomeContainer>
    </div>
  );
};

export default Home;
