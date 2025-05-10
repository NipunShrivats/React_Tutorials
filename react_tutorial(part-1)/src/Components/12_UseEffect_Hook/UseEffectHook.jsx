import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count:", count);
  }, [count]);

  const [date, setDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <div>
        <h1>Hello useEffect</h1>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>INC</button>

        <h1>Date: {date}</h1>
      </div>
    </>
  );
}
