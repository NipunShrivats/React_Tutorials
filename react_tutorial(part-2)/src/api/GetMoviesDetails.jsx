import React from "react";
import ErrorPage from "../pages/ErrorPage";

// made as a function and not a component
export const getMoviesDetails = async ({ params }) => {
  const id = params.movieID;
  console.log(params);
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
