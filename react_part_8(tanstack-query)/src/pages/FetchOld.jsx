import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/Api";
import "../App.css";

export default function FetchOld() {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  console.log(posts);

  return (
    <>
      <ol className="posts-ul">
        {posts.map((currData) => {
          return (
            <>
              <li key={currData.id} className="">
                <p>{currData.title}</p>
                <p>{currData.body}</p>
              </li>
              <hr />
            </>
          );
        })}
      </ol>
    </>
  );
}
