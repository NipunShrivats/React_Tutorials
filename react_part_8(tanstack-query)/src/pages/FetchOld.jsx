import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";
import "../App.css";

export default function FetchOld() {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      console.log(res);
      setPosts(res);
    } catch (error) {
      console.log(error);
      // return [];
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  console.log(posts);

  return (
    <>
      <h2 style={{ color: "red" }}>Only Axios</h2>
      <ol className="posts-ul">
        {posts?.map((currData) => {
          return (
            <li key={currData.id} className="">
              <p>{currData.title}</p>
              <p>{currData.body}</p>
            </li>
          );
        })}
      </ol>
    </>
  );
}
