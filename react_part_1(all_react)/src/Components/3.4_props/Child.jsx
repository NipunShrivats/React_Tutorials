import React from "react";

export default function Child({ sendDataToParent }) {
  const handleClick = () => {
    sendDataToParent("Hello Parent!");
  };
  return <button onClick={handleClick}>Send Data to Parent</button>;
}
