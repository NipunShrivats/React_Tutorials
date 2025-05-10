import React from "react";
import { useBioContext } from "./Index";

export default function Services() {
  const { myName, age } = useBioContext();
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
