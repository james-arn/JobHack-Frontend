import { Link } from "react-router-dom";
import {
  Container,
  Left,
  Right,
  StyledInput,
  StyledButton,
  StyledLabel,
} from "../styles/container.styled";
import logo from "./jobhack-img.svg";
import { login } from "../../utils";
export const Signup = ({
  setUsername,
  setEmail,
  setPass,
  submitHandler,
  loginToggle,
  setLoginToggle,
  auth,
}) => {
  // const checkLogIn = () => {
  //   login;
  // };

  return (
    <div>
      <Container>
        <Left>
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
            {auth === true ? (
              <Link to="/find">
                <StyledButton type="submit">
                  {!loginToggle ? "Sign up" : "Log in"}{" "}
                </StyledButton>
              </Link>
            ) : (
              <StyledButton type="submit">
                {!loginToggle ? "Sign up" : "Log in"}{" "}
              </StyledButton>
            )}
          </form>
          <StyledButton
            onClick={(e) => {
              setLoginToggle(!loginToggle);
              setUsername();
            }}
          >
            {!loginToggle ? "Already have an account?" : "Need to register?"}
          </StyledButton>
        </Left>
        <Right>
          <img src={logo} alt="logo" />
        </Right>
      </Container>
    </div>
  );
};
