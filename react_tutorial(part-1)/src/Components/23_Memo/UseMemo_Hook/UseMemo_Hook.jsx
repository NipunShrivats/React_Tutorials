import React, { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  //expensive calculation
  const sum = () => {
    console.log("calculating sum...");
    let i = 0;
    for (i = 0; i <= 100; i++) {
      i = i + 1;
    }
    return i;
  };
  const total = useMemo(() => sum(), []);
  console.log(total);
  return <p>sum:{total}</p>;
};

export default function UseMemo_Hook() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <ExpensiveComponent />
        <button
          onClick={() => setCount(count + 1)}
          className="border-2 border-amber-700"
        >
          Re-Render Parent
        </button>
        <p>Parent re-renders:{count}</p>
      </div>
    </>
  );
}
