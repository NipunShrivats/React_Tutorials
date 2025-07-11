import React from "react";

export default function Wrapper({ children, color = "black" }) {
  return (
    <>
      <div
        style={{ color: color, border: `2px solid ${color}`, width: "300px" }}
      >
        {children}
      </div>
    </>
  );
}
