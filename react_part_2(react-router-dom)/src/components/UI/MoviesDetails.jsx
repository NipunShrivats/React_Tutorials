import React from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";

// useParams - this is old method, now we use it by destruturing props named "params"
// import { useParams } from "react-router-dom";

export default function MoviesDetails() {
  //
  // const params = useParams();
  // console.log(params.movieID);

  //
  const MovieData = useLoaderData();
  console.log(MovieData);
  const { Poster, imdbID, Title, Year } = MovieData;
  return (
    <>
      <div className="flex flex-col flex-1/4 items-center justify-around">
        <img
          src={Poster}
          alt={imdbID}
          className="h-[20rem] w-[15rem] hover:scale-125 transition delay-150 duration-300 ease-in-out"
        />

        <div>
          <p>
            {Title} - {Year}
          </p>
        </div>
        {/* <button className="mt-[0.5rem] mb-[2rem] border-transparent px-4 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition delay-100 duration-100 ease-in-out cursor-pointer">
          <NavLink to={`/movies/${imdbID}`} target="_blank">
            View Details
          </NavLink>
        </button> */}
      </div>
    </>
  );
}
