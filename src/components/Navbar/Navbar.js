import { Link } from "react-router-dom";
import "./Navbar.css";
import JHNavBarImg from "./JHNavBar.svg";

//if state = logged out
export const Navbar = ({ user, logOutHandler }) => {
  return { user } ? (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">
            <img src={JHNavBarImg} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/find">Find</Link>
        </li>
        <li>
          <Link to="/manage">Manage</Link>
        </li>
        <li>
          <Link to="/">
            <button onClick={logOutHandler}>Log out</button>
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    //if state = logged in
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={JHNavBarImg} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button> Sign up </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
