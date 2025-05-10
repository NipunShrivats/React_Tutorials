import React, { useRef } from "react";

export default function UseRef() {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      <form action="\" onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="username"
          placeholder="username"
          ref={username}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="password"
          ref={password}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
