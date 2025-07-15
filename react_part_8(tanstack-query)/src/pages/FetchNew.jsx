import React, { useState } from "react";
import { fetchPosts } from "../API/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function UsingTanStack() {
  const [pageNo, setPageNo] = useState(0);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNo], // works like useState
    queryFn: () => fetchPosts(pageNo), // works like useEffect
    placeholderData: keepPreviousData,

    // gcTime: 1000, // in ms
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  if (isPending) return <div>Loading posts...</div>;
  if (isError)
    return <div>Error: {error.message || "Something is wrong!"}</div>;

  return (
    <>
      <div>
        <h2 style={{ color: "red" }}>Tanstack</h2>
        <ol className="fetchnew-box">
          {/* Meaning of data?.map(): It checks if data exists and isn’t null or
        undefined before trying to run .map() on it. */}
          {data?.map((curElem) => {
            const { id, title, body } = curElem;
            return (
              <li key={id} className="fetchnew-li">
                <NavLink to={`/fetchnew/${id}`} className="fetchnew-link">
                  <p>{id}</p>
                  <p>{title}</p>
                  <p>{body}</p>
                </NavLink>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="page">
        <button
          onClick={() => setPageNo((prev) => prev - 3)}
          disabled={pageNo === 0}
        >
          Prev
        </button>
        <h2>{pageNo / 3 + 1}</h2>
        <button
          onClick={() => setPageNo((prev) => prev + 3)}
          disabled={pageNo / 3 + 1 === 34}
        >
          Next
        </button>
      </div>
    </>
  );
}
