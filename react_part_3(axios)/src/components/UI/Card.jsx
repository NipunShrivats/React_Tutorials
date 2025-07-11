import React from "react";
import { NavLink } from "react-router-dom";
export default function Card({ movieData }) {
  return (
    <>
      <div className="flex flex-col flex-1/5 items-center justify-around">
        <img
          src={movieData.Poster}
          alt={movieData.imdbID}
          className="h-[20rem] w-[15rem] hover:scale-125 transition delay-150 duration-300 ease-in-out"
        />

        <div>
          <p>
            {movieData.Title} - {movieData.Year}
          </p>
        </div>
        {/* <button className="mt-[0.5rem] mb-[2rem] border-transparent px-4 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition delay-100 duration-100 ease-in-out cursor-pointer">
          <NavLink to={`/movies/${movieData.imdbID}`} target="_blank">
            View Details
          </NavLink>
        </button> */}
      </div>
    </>
  );
}
