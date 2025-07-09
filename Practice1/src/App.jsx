import React, { useEffect } from "react";

export default function App() {
  console.log("START");

  //
  useEffect(() => {
    console.log("number 1");
    // cleanup - prevents memory leak // works under the hood
    return () => {
      console.log("number 2");
    };
  }, []);

  console.log("END");

  // Spread operator
  const nums = [1, 2, 3];
  const newNums = [...nums, 4, 5];
  console.log("newNums: ", newNums);

  // rest Operator
  function logAll(...args) {
    console.log(args);
  }
  logAll(1, 2, 3, 4, 5, 6, 67, 8, 8, 9);

  return <></>;
}
