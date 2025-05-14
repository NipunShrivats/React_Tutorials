import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Error_img from "../assets/error.jpg";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const error = useRouteError(); // help to get details about the error occured.
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
            <NavLink to={"/"}>Back to Home</NavLink>
          </p>
          <p className="flex justify-center">
            <button
              className="text-center text-[1.5rem] text-red-500 border-1 w-[15rem] pt-[.5rem] pb-[.5rem] rounded-full cursor-pointer hover:bg-red-500 hover:text-black hover:border-transparent"
              onClick={goBack}
            >
              Go Back
            </button>
          </p>
        </div>
      </section>
    );
  }
}
