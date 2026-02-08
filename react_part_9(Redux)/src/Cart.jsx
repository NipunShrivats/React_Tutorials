import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // receiving data
  const selector = useSelector((state) => state.cart.value);
  console.log(selector);
  return (
    <div className="cart">
      <span className="cart-count">{selector}</span>
    </div>
  );
};

export default Cart;
