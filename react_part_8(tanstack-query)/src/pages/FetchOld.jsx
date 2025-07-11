import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/Api";

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

  return <>FetchOld</>;
}
