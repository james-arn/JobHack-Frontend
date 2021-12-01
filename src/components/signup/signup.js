import { Container, Left, Right, StyledInput, StyledButton, StyledLabel } from "../styles/container.styled";
import logo from "./jobhack-img.svg";

export const Signup = ({
  setUsername,
  setEmail,
  setPass,
  submitHandler,
  listUserHandler,
  updateEmailHandler,
  deleteUserHandler,
  loginToggle,
  setLoginToggle,
}) => {
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
          <StyledButton type="submit"> {!loginToggle ? "Sign up" : "Log in"} </StyledButton>
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
      {/* <h3>Read Users</h3>
      <button onClick={listUserHandler}> List users (check console) </button> */}
      
        {/* <form onSubmit={updateEmailHandler}>
          <h3>
            Update: Enter your username & the email that you want to change to{" "}
          </h3>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="updated email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit"> Update email </button>
        </form> */}
        {/* <form onSubmit={deleteUserHandler}>
          <h3> Delete User </h3>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit"> Delete user </button>
        </form> */}
      
    </div>
  );
};
//e i event, put in anomiynous funciton so doesn't call. onyl arg reciveed
// is event.
