import React, { useId } from "react";

export default function UseId() {
  // const userId = useId();
  // const emailId = useId();

  const id = useId();

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="username">username</label>
          <input type="text" id={`${id}-username`} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id={`${id}-email`} name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
