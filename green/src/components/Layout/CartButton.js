import { useContext } from "react";
import CartContext from "../Cart/cart-context";
import Icon from "../Cart/Icon";
import classes from './CartButton.module.css'


function CartButton(props) {
  const ctx = useContext(CartContext);
  
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  
  

  return (
    <button className={classes.button} onClick={props.onShow}>
    <span className={classes.icon}>
      <Icon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
  );
}

export default CartButton;
