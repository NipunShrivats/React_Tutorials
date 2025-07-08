import React, { use, useState } from "react";

export default function AddUser(props) {
  // Now we want this values to be in DisplayUser as well which is the sibling of AddUser so we have to lioft the state up and transfer useState to App.jsx
  //   const [user, setUser] = useState("");

  const { user, setUser } = props;
  return (
    <>
      <h1>Add User: {user}</h1>
      <input
        type="text"
        placeholder="Enter userName"
        onChange={(e) => setUser(e.target.value)}
      />
      <hr />
    </>
  );
}
