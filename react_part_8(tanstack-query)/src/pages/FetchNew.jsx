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
  });

  if (isPending) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error: {error.message || "Something is wrong!"}</div>;
  }

  return (
    <div>
      <h2 style={{ color: "red" }}>Tanstack</h2>
      <ol>
        {data.map((curElem) => {
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
