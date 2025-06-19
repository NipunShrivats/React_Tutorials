import React, { useEffect, useLayoutEffect, useState } from "react";

// export default function UseLayoutEffectHook() {
//   useEffect(() => {
//     console.log("First useEffect");
//   }, []);
//   useLayoutEffect(() => {
//     console.log("second useEffect");
//   }, []);
//   useEffect(() => {
//     console.log("third useEffect");
//   }, []);

//   return <>useLayoutEffect</>;
// }

export default function UseLayoutEffectHook() {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num == 0) {
      setNum(5 + Math.random() * 50);
    }
  }, [num]);

  console.log("num: ", num);
  return (
    <>
      <h2>{num}</h2>
      <button
        onClick={() => setNum(0)}
        className="border-2 w-[10rem] cursor-pointer"
      >
        Check
      </button>
    </>
  );
}
