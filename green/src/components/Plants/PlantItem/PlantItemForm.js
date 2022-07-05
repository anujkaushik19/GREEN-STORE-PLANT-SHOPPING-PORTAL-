import { useRef } from "react";
import Input from "../../UI/Input";
import classes from './PlantItemForm.module.css'



function PlantItemForm(props) {

  const amountInputRef = useRef('');

  const formSubmitHandler = (event)=>{
    event.preventDefault();
    const amount = amountInputRef.current.value;
    const amountNumber = +amount;
    props.getAmount(amountNumber)

  }
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        label="amount"
        ref = {amountInputRef}
        input={{
          type: "number",
          step: "1",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
}

export default PlantItemForm;
