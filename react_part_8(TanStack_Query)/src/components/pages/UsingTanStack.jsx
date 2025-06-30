import React, { useEffect } from "react";
import { fetchPosts } from "../../API/api";
import { useQuery } from "@tanstack/react-query";

export default function UsingTanStack() {
  const getPosts = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], // works like useState
    queryFn: getPosts, // works like useEffect
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 style={{ color: "red" }}>Tanstack</h2>
      <ul className="section-accordian">
        {data.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>title: {title}</p>
              <p>body: {body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
