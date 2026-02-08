import React from "react";
import Cart from "./Cart";

const Header = () => {
  return (
    <header>
      <div className="logo">MyShop</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;
