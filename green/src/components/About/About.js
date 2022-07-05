import { Fragment } from "react";
import classes from "./About.module.css";
// import image from "../../assets/anuj.jpg";
import HomeIcon from "@mui/icons-material/Home";

function About() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className={classes.icon}>
            <div>
              <HomeIcon />
            </div>

            <a className="navbar-brand " href="#">
              About Us
            </a>
          </div>
        </div>
      </nav>
      <>
        <div className={classes["about-section"]}>
          <h1>Green Store</h1>
          <p></p>
          <p>
            “Your intuitive powers increase when you are with plants because
            your mind is silenced and you become more aware in the present
            moment.” 
            <hr />
            GREEN STORE is a start-up initiated by Anuj Kaushik that
            solves the problem of comsumers to go out to nurseries in search of
            plants. Instead they can visit our page and order their favourite ones to beautify their balconies 
            and  preserve the nature.
          </p>
        </div>
      </>
    </Fragment>
  );
}

export default About;
