import React, { useState } from "react";
import { MemoCount } from "./MemoCount";

export default function ReactMemo() {
  const [count, setCount] = useState(0);
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

      {/* this is rerendering unnecessarily */}
      <MemoCount />
    </>
  );
}
