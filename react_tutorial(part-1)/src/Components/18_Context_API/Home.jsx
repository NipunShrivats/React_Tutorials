import React, { useContext } from "react";
import { BioContext } from "./Index";

export default function Home() {
  // Step 3 - consume context
  const { myName, age } = useContext(BioContext);
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
