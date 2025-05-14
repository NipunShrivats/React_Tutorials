import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/UI/Card";

export default function Movies() {
  let moviesData = useLoaderData(); // this hook help us to get data from the api that was fetched in the api folder, Its data was transfered in this page using loader attribute to "react-router-dom" used in "App.jsx" file

  moviesData = moviesData.Search;
  // console.log(moviesData);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {moviesData.map((currEle) => {
          return <Card key={currEle.imdbID} currMovie={currEle} />;
        })}
      </div>
    </>
  );
}
