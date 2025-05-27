import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";

export default function Posts() {
  const [apiData, setApiData] = useState([]);
  // using useEffect
  const getApiData = async () => {
    const res = await getPost();
    // console.log(res);
    // console.log(res.data);
    setApiData(res.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <section>
        <ul>
          {apiData.map((curEle) => {
            const { id, title, body } = curEle;
            return (
              <li key={id}>
                <p>{title}</p>
                <p>{body}</p>
                <button>Edit</button>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
