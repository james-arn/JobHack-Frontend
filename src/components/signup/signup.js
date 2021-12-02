import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Container,
  Left,
  Right,
  StyledInput,
  StyledButton,
  StyledLabel,
} from "../styles/container.styled";
import logo from "./jobhack-img.svg";
import { login, fetchRequestAddUser } from "../../utils";
export const Signup = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  loginToggle,
  setLoginToggle,
  auth,
  setAuth,
  setUser,
}) => {
  //REACT ROUTER STATE
  let navigate = useNavigate();
  useEffect(() => {
    setAuth(); // on load this renders while getUser does thing.
  }, []);

  //HANDLERS

  const navigateToFind = (auth) => {
    if (auth === true) {
      navigate("/find");
    } else {
      alert("please re-enter log in");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username) {
      fetchRequestAddUser(username, email, pass, setUser);
    } else {
      login(email, pass, setUser, setAuth, navigateToFind);
    }
  };

  return (
    <div>
      <Container>
        <Left>
          <h1 className="login-title">
            Welcome Back to <span className="login-span">JobHack</span>
          </h1>
          <form id="formSignup" onSubmit={submitHandler}>
            {!loginToggle && (
              <>
                <StyledLabel for="username">Username</StyledLabel>
                <StyledInput
                  className="inputSignup"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </>
            )}
            <StyledLabel for="email">Email</StyledLabel>
            <StyledInput
              className="inputSignup"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledLabel for="password">Password</StyledLabel>
            <StyledInput
              className="inputSignup"
              name="password"
              onChange={(e) => setPass(e.target.value)}
            />
            {auth === false && (
              <p style={{ color: "red" }}>
                *Incorrect login details. Please re-enter.
              </p>
            )}

            <StyledButton type="submit">
              {!loginToggle ? "Sign up" : "Log in"}{" "}
            </StyledButton>
          </form>
          <button
          className="link-item"
            onClick={(e) => {
              setLoginToggle(!loginToggle);
              setUsername();
            }}
          >
            {!loginToggle ? "Already have an account?" : "Need to register?"}
          </button>
        </Left>
        <Right>
          <img src={logo} alt="logo" />
        </Right>
      </Container>
    </div>
  );
};
