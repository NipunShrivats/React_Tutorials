import React, { useState } from "react";
import "../App.css";
import { PiHamburgerBold } from "react-icons/pi";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleBtnToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="logo">
              <h1>NIPUN RAWAT</h1>
            </div>

            <nav className={showMenu ? "menu-mobile" : "menu-web"}>
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">SERVICES</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </nav>
            <div className="ham-menu">
              <button onClick={handleBtnToggle}>
                <PiHamburgerBold />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
