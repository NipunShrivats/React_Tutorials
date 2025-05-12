import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
export default function Header() {
  return (
    <>
      <div className="bg-amber-600">
        <p className="border-1 text-center">Get Membership at just Rs.399/-</p>
        <nav className="">
          <ul className="p-2 flex items-center justify-around">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
