import { useContext, useRef, useState } from "react";

import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Modal from '../UI/Modal'

function AuthForm() {
  const [isLogin, setIsLogIn] = useState(true);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDymOcj9nmRCRSIG3kCVeOGEE5fJLxmvnI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDymOcj9nmRCRSIG3kCVeOGEE5fJLxmvnI";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            const errorMessage = "Access Denied!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        ctx.login(data.idToken);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        alert(error.message)
      });
  };

  const switchHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchHandler}
          >
            {isLogin ? "Create New Account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
