import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      userName,
      password,
    };

    console.log(loginData);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Login Form</h1>
          <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              required
              autoComplete="off"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
