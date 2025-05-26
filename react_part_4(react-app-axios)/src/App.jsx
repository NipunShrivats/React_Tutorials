import React, { useEffect } from "react";
import { getPost } from "./api/PostApi";

export default function App() {
  //getting a promise
  //   console.log(getPost());

  // using useEffect

  const getApiData = async () => {
    const res = await getPost();
    // console.log(res);
    console.log(res.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return <div>App</div>;
}
