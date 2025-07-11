import React from "react";

export default function DisplayUser(props) {
  const { user, setUser } = props;
  return (
    <>
      <h1>Display User: {user}</h1>
    </>
  );
}
