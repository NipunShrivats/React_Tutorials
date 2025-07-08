import React from "react";

export default function User({ name = "user" }) {
  return (
    <>
      <h1>Hi, {name}</h1>
    </>
  );
}
