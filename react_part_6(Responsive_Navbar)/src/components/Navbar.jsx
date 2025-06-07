import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="logo">
              <h1>THAPA TECHNICAL</h1>
            </div>

            <nav>
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
          </div>
        </div>
      </header>
    </>
  );
}
