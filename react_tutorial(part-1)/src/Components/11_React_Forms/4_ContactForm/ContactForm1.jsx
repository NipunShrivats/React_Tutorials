import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm1() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const formData = {
      user,
      password,
      message,
    };
    console.log(formData);
  };
  return (
    <>
      <div className="container">
        <h1>Contact Form</h1>
        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
