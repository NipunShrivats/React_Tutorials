import React from "react";

export default function Contacts() {
  // this is formData hook/api
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="false"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="false"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
