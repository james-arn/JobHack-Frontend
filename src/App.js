import "./App.css";
import { useState, useEffect } from "react";
import { Signup } from "./components/signup/signup";
import {
  fetchRequestAddUser,
  getUser,
  fetchRequestListUsers,
  fetchRequestUpdateEmail,
  fetchRequestDeleteUser,
  Login,
} from "./utils";
import { Navbar } from "./components/Navbar/Navbar";
import { Find } from "./components/Find/Find";
import Home from "./components/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Manage } from "./components/Manage/Manage";
import { initialData } from "./initialData";

function App() {
  //USER states
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loginToggle, setLoginToggle] = useState(false);
  // Board State
  const [board, setBoard] = useState(initialData);
  useEffect(() => {
    getUser(setUser); // on load this renders while getUser does thing.
  }, []);

  //USER HANDLERS
  const submitHandler = (e) => {
    e.preventDefault(); //stops entire page rerendering when clicked.
    // const userObj = { user: user, email: email, password: pass };
    // setUser(userObj); //entire user stored in state.
    if (username) {
      fetchRequestAddUser(username, email, pass, setUser);
    } else {
      Login(email, pass, setUser);
    }
    //// FOR LOCAL STORAGE:
    // const jsonObj = JSON.stringify(userObj);
    // localStorage.setItem("user", jsonObj);
  };

  const listUserHandler = () => {
    fetchRequestListUsers();
  };

  const updateEmailHandler = (e) => {
    e.preventDefault();
    fetchRequestUpdateEmail(username, email, setUser);
  };

  const deleteUserHandler = (e) => {
    e.preventDefault();
    fetchRequestDeleteUser(username);
  };

  const logOutHandler = () => {
    setUser();
    localStorage.removeItem("MyToken");
  };

  return (
    <BrowserRouter>
      <Navbar user={user} logOutHandler={logOutHandler} />
      {/* {!user && (
        <Signup
          setUsername={setUsername}
          setEmail={setEmail}
          setPass={setPass}
          submitHandler={submitHandler}
          listUserHandler={listUserHandler}
          updateEmailHandler={updateEmailHandler}
          deleteUserHandler={deleteUserHandler}
          loginToggle={loginToggle}
          setLoginToggle={setLoginToggle}
        />
      )} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/find"
          element={<Find board={board} setBoard={setBoard} />}
        />
        <Route
          path="/signup"
          element={
            <Signup
              setUsername={setUsername}
              setEmail={setEmail}
              setPass={setPass}
              submitHandler={submitHandler}
              listUserHandler={listUserHandler}
              updateEmailHandler={updateEmailHandler}
              deleteUserHandler={deleteUserHandler}
              loginToggle={loginToggle}
              setLoginToggle={setLoginToggle}
            />
          }
        />
        <Route
          path="/manage"
          element={<Manage board={board} setBoard={setBoard} />}
        />
        <Route path="*" element={<p>Not found.</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
