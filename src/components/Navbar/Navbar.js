import { Link } from "react-router-dom";
import Nav, { Logo, Hamburger, Menu, MenuLink } from "./NavBar.styled";
import JHNavBarImg from "./JHNavBar.svg";

//if state = logged out
export const Navbar = ({ user, logOutHandler }) => {
  return user ? (
    <Nav>
      <Logo>
        <Link to="/">
          <img src={JHNavBarImg} alt="logo" />
        </Link>
      </Logo>
      <Hamburger>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu>
        <MenuLink to="/find">Find</MenuLink>
        <MenuLink to="/manage">Manage</MenuLink>
        <Link to="/">
          <button onClick={logOutHandler}>Log out</button>
        </Link>
      </Menu>
    </Nav>
  ) : (
    <Nav>
      <Logo>
        <Link to="/">
          <img src={JHNavBarImg} alt="logo" />
        </Link>
      </Logo>
      <Link to="/signup">
        <button> Sign up </button>
      </Link>
    </Nav>
  );
};
