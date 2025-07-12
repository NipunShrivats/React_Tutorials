import React from "react";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";
import "../App.css";

export default function UsingTanStack() {
  const getPosts = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], // works like useState
    queryFn: getPosts, // works like useEffect
    // gcTime: 1000, // in ms
    // staleTime: 5000,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  // isLoading --> isPending
  // isInitialLoading --> isLoading
  if (isPending) return <div>Loading posts...</div>;
  if (isError)
    return <div>Error: {error.message || "Something is wrong!"}</div>;

  return (
    <div>
      <h2 style={{ color: "red" }}>Tanstack</h2>
      <ol>
        {/* Meaning of data?.map(): It checks if data exists and isn’t null or
        undefined before trying to run .map() on it. */}
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
