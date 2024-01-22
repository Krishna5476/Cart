import React from "react";
import "./cartItem.css";
import { cartActions } from "../store/Cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({ name, total, quantity, id, price }) => {
  const dispatch = useDispatch();
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const incrementCartItems = () => {
    dispatch(
      cartActions.addTocart({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrementCartItems} className="cart-actions">
        -
      </button>
      <button onClick={incrementCartItems} className="cart-actions">
        +
      </button>
    </div>
  );
};
export default CartItem;
