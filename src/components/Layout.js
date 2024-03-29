import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Layout = () => {
  let total = 0;
  const items = useSelector((state) => state.cart.itemsList);
  items.forEach((item) => {
    total = item.totalPrice + total;
  });
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems></CartItems>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
