import React from "react";
import { useRouteError } from "react-router-dom";
import Error_img from "../assets/error.jpg";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <section className="flex flex-col items-center justify-center h-[90vh]">
        <img src={Error_img} alt="error_img" className="w-[50rem]" />
        <div>
          <p className="text-center text-[2rem]">
            The page you are looking for is not to be found
          </p>
          <p className="text-center text-[1.5rem] text-red-500 ">
            <NavLink to={"/"}>Back to previous</NavLink>
          </p>
        </div>
      </section>
    );
  }
  return (
    <>
      <div>Error Page</div>
    </>
  );
}
