import React, { forwardRef, useId, useRef } from "react";

export default function ForwardRef() {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Before React19</h2>
      <form action="" onSubmit={handleFormSubmit} style={{ height: "22vh" }}>
        <BeforeReact19Input label="username" ref={username} />
        <BeforeReact19Input label="password" ref={password} />
        <button type="submit">Submit</button>
      </form>

      <h2 style={{ textAlign: "center" }}>After React19</h2>
      <form action="" onSubmit={handleFormSubmit} style={{ height: "22vh" }}>
        <AfterReact19Input label="username" ref={username} />
        <AfterReact19Input label="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

const BeforeReact19Input = forwardRef((props, ref) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={ref} />
    </div>
  );
});

const AfterReact19Input = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};
