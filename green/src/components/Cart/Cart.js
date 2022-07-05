import { useContext } from "react";
import PlantItem from "../Plants/PlantItem/PlantItem";
import Modal from "../UI/Modal";
import CartContext from "./cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const ctx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((plant) => (
        <CartItem
          name={plant.name}
          id={plant.id}
          price={plant.price}
          amount={plant.amount}
          
        />
      ))}
    </ul>
  );

  

  

  const totalAmount = ctx.totalAmount.toFixed(2);

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["btn--alt"]} onClick={props.onHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
