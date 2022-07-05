import { Button } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./StartingPage.module.css";

function StartingPage() {
  const navigate = useNavigate();

  const formShowHandler = () => {
    navigate("/form", { replace: true });
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className={classes.icon}>
          <marquee direction="right">Join us now and get an exclusive discout of 20% on all items.</marquee>
        </div>
      </nav>
      <>
        <div className={classes["about-section"]}>
          <h1 style={{ color: "black" }}>Green Store</h1>
        </div>
        <div className={classes.text}>
          <h3>To Avail Our Services Kindly Login / Sign Up.</h3>
        </div>
      </>
      <div className={classes.button}>
        <div>
          <button className={classes.style} onClick={formShowHandler}>
            Login / Sign Up
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default StartingPage;
