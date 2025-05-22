import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`rendering button: ${children}`);
  return (
    <button
      onClick={onClick}
      className={`${children === "INC" ? "bg-green-400" : "bg-red-400"}`}
    >
      {children}
    </button>
  );
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  // useCallback Hook used here ----
  const inc = useCallback(() => {
    console.log("inc++");
    setCount((prev) => prev + 1);
  }, []);
  const dec = useCallback(() => {
    console.log("dec--");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        {/* here props are passed in function -- or --  */}
        {/* functions are passed as props */}
        <Button onClick={inc} children={"INC"} />
        <Button onClick={dec} children={"DEC"} />
      </div>
    </>
  );
}
