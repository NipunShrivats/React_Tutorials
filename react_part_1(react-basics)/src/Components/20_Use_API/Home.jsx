import React from "react";
import { useBioContext } from "./Index";

export default function Home() {
  // Step 3 - consume context
  // const { myName, age } = useContext(BioContext); // replaced this
  const { myName, age } = useBioContext(); // with this
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
