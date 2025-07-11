import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm2() {
  const [data, setData] = useState({
    username: "",
    password: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(data);
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
            value={data.user}
            onChange={handleInputChange}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
          />

          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            value={data.message}
            onChange={handleInputChange}
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
