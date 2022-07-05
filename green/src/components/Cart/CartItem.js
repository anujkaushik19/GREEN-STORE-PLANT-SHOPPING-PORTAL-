import { useContext } from "react";
import CartContext from "./cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.price.toFixed(2);
  const ctx = useContext(CartContext);

  const addToCartHandler = () => {
    ctx.addPlant({
      name: props.name,
      amount: 1,
      price: props.price,
      id: props.id,
    });
  };

  const removeFromCartHandler = ()=>{
    ctx.removePlant(props.id);
  }

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeFromCartHandler}>−</button>
        <button onClick={addToCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
