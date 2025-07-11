import React, { useEffect, useState } from "react";

export default function HowToFetchAPI() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ul>
        data:
        {apiData.map((curData) => {
          return (
            <li key={curData.id}>
              <h3>{curData.title}</h3>
              <p>{curData.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
