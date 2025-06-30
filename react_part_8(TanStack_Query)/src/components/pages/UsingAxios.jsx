import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../API/api";

export default function UsingAxios() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h2 style={{ color: "red" }}>Axios</h2>
      <ul className="section-accordian">
        {posts.map((curElem) => {
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
