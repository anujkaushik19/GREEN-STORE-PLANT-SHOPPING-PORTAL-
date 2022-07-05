import { Fragment, useRef, useState } from "react";
import SuccessIcon from "../assets/SuccessIcon";
import classes from "./JoinUs.module.css";
import Register from "./Register";

function JoinUs() {
  const [registered, setRegistered] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  

  const submitHandler = (event) => {
    event.preventDefault();
    
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if(enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0){
      alert('Something Went Wrong')
      return;
    }
    setRegistered(true);
  };

  return (
    <Fragment>
      {registered && <Register />}
      {!registered && (
        <div className={classes.main}>
          <form className={classes.about} onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref = {emailInputRef}
              />
              <div
                id="emailHelp"
                className="form-text"
                style={{ color: "white" }}
              >
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={passwordInputRef}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </Fragment>
  );
}

export default JoinUs;
