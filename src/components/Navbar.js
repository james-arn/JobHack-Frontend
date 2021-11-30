import { Link } from "react-router-dom";
import JHNavBarImg from "../../public/JHNavBar.svg";

//if state = logged out

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={JHNavBarImg} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button> Sign up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );

  //if state = logged in
  return (
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
  );
};
