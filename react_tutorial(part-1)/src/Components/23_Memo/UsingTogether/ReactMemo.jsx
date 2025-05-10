import React, { useMemo, useState } from "react";
import { MemoCount } from "./MemoCount";

export default function ReactMemo() {
  const [count, setCount] = useState(0);

  // in case there is a prop value that have to changed but avoid unnecessary delays in rerender of other components so we can use useMemo to change the props and save the other values in cache.
  const myBio = useMemo(() => {
    return {
      name: "Nipun",
      age: "22",
    };
  }, []);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{ border: "2px solid red" }}
        >
          Increment
        </button>
      </div>

      {/* now this is re-rendering when passed an object but not when a normal string */}
      <MemoCount bioData={myBio} />
      {/* <MemoCount bioData="myBio" /> */}
    </>
  );
}
