import { useContext } from "react";
import CartContext from "../../Cart/cart-context";
import classes from "./PlantItem.module.css";
import PlantItemForm from "./PlantItemForm";

function PlantItem(props) {


  const ctx = useContext(CartContext);

  const addplantHandler = (amount)=>{
    
    ctx.addPlant({
      amount : amount,
      name : props.name,
      price : props.price,
      id : props.id
    })
      
    
  }
  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.text}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <PlantItemForm getAmount = {addplantHandler}/>
    </li>
  );
}

export default PlantItem;
