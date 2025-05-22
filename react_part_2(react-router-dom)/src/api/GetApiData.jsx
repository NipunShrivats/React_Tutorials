import React from "react";
import ErrorPage from "../pages/ErrorPage";

// made as a function and not a component
export const getMoviesData = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titan&page=1`
    );
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//we have installed this api to the loaders when routing to the specific page we want it to fetch data.
// the data will be further extracted from the loaders via "useLoaderData" Hook/
