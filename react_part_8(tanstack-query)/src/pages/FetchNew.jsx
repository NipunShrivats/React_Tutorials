import React from "react";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function UsingTanStack() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], // works like useState
    queryFn: fetchPosts, // works like useEffect

    // gcTime: 1000, // in ms
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  // isLoading --> isPending
  // isInitialLoading --> isLoading
  if (isPending) return <div>Loading posts...</div>;
  if (isError)
    return <div>Error: {error.message || "Something is wrong!"}</div>;

  return (
    <div>
      <h2 style={{ color: "red" }}>Tanstack</h2>
      <ul className="fetchnew-box">
        {/* Meaning of data?.map(): It checks if data exists and isn’t null or
        undefined before trying to run .map() on it. */}
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id} className="fetchnew-li">
              <NavLink to={`/fetchnew/${id}`} className="fetchnew-link">
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
