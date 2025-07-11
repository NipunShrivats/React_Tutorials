import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

export default function Header() {
  return (
    <>
      <NavLink to={"/"} className="title">
        Tanstack Query
      </NavLink>
      <ul className="header-box">
        <li>
          <button>
            <NavLink to={"fetchold"} className="link-main">
              Fetch Old
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to={"fetchnew"} className="link-main">
              Fetch New
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to={"/"} className="link-main">
              Go Home
            </NavLink>
          </button>
        </li>
      </ul>
    </>
  );
}
