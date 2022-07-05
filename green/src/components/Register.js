import classes from "./Register.module.css";

import SuccessIcon from "../assets/SuccessIcon";
import Modal from "./UI/Modal";

function Register() {
  return (
    <Modal>
        <div className={classes.main}>
        <h2>You Have Registered Successfully</h2>
        </div>
      
    </Modal>
  );
}

export default Register;
