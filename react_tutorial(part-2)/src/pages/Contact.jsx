import React from "react";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    // all this is provided by "FORM component from react-router-dom"
    const res = await request.formData();
    console.log(res);
    const data = Object.fromEntries(res);
    console.log(data);
  } catch (error) {
    console.log(error);
    1;
  }
};

export default function Contact() {
  return (
    <>
      <div className="container">
        <h1 className="text-[2rem] mb-[4rem]">Contact Form</h1>

        <Form
          method="post"
          action="/contact"
          className="flex flex-col items-center justify-center gap-1"
        >
          <label htmlFor="">UserName</label>
          <input type="text" name="username" className="border-1 w-[20rem]" />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className="border-1 w-[20rem]"
          />

          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            rows={4}
            cols={45}
            className="border-1"
          ></textarea>

          <button
            type="submit"
            className="border-1 w-[10rem] p-2 bg-black text-white rounded-full hover:bg-gray-800 cursor-pointer m-[2rem]"
          >
            Send
          </button>
        </Form>
      </div>
    </>
  );
}
