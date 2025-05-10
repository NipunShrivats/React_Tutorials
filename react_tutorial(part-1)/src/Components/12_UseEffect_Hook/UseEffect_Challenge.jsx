import React, { useEffect, useState } from "react";

// 1. A Counter that increments when a button is clicked
// 2. An input field where users can type their name.
// 3. the document title will update to show the current count

export default function UseEffect_Challenge() {
  // 1.
  const [count, setCount] = useState(0);

  const [fname, setFname] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  const onBtnClick = () => {
    setCount(count + 1);
  };

  // 2.
  useEffect(() => {
    console.log(fname);
  }, [fname]);

  // 3.
  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);
  return (
    <>
      <h1>UseEffect Challenge</h1>
      <div>count: {count}</div>
      <button onClick={onBtnClick}>INC ++</button>

      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={fname}
          onChange={(event) => setFname(event.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
