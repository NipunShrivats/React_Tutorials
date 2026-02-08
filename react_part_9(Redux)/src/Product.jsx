import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/Slice";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3qARXQdkyZYhkR35oeGLmLoIWjODSqbNbA&s"
        alt="Product Image"
      />
      <h2>Logitech Mouse</h2>
      <h3>$12.99/-</h3>
      <p>
        Sleek and ergonomic wireless mouse with adjustable DPI settings, smooth
        tracking, and long-lasting battery life. Perfect for work, gaming, or
        everyday use.
      </p>
      <button
        className="add-to-cart"
        onClick={() => {
          dispatch(addItem(1));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
