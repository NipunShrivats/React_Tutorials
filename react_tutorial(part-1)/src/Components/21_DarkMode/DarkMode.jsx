import React, { use } from "react";
import { ThemeContext } from "./Index";

export default function DarkMode() {
  const { theme, handleToggleTheme } = use(ThemeContext);
  let btn_data =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  let main_Theme = theme === "dark" ? "bg-gray-800" : "bg-white";
  return (
    <>
      <div
        className={`p-4 h-lvh flex flex-col justify-center items-center 
        ${main_Theme}`}
      >
        <h1 className="">Dark Mode Switcher</h1>
        <p>Hello! React 19 fans 🙆‍♂️</p>
        <button
          onClick={handleToggleTheme}
          style={{ padding: "1rem 2rem", marginTop: "1rem" }}
          className=" bg-blue-500 hover:bg-blue-600 text-white rounded-md border-2 border-solid"
        >
          {btn_data}
        </button>
      </div>
    </>
  );
}
