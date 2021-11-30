import { Container, Left, Right, StyledInput, StyledButton } from "../styles/container.styled";
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
            <StyledInput
              className="inputSignup"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <StyledInput
            className="inputSignup"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            className="inputSignup"
            placeholder="password"
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
