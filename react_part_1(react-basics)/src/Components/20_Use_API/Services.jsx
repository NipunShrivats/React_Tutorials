import React, { useContext, use } from "react";
// import { useBioContext } from "./Index";
import { BioContext } from "./Index";

export default function Services() {
  const newHook = true;
  let myName, age;
  if (newHook) {
    // ({ myName, age } = useContext(BioContext)); // should not work but is working
    ({ myName, age } = use(BioContext));
  }
  return (
    <>
      <div>
        <h2>
          My Name is {myName} and I am {age} years old
        </h2>
      </div>
    </>
  );
}
