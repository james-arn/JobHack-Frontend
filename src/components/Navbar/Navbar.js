import { Link } from "react-router-dom";
import "./Navbar.css";
import JHNavBarImg from "../../../public/JHNavBar.svg";

//if state = logged out

export const Navbar = ({ user }) => {
  return { user } ? (
    <nav>
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
          <Link to="/logout">
            <button>Log out </button>
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
