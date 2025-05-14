import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Movies() {
  const moviesData = useLoaderData(); // this hook help us to get data from the api that was fetched in the api folder, Its data was transfered in this page using loader attribute to "react-router-dom" used in "App.jsx" file
  console.log(moviesData);
  return (
    <>
      <div className="bg-gray-700 p-5">Movies Page</div>
    </>
  );
}
