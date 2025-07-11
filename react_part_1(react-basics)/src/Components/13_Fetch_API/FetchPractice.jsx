import React, { useEffect, useState } from "react";

export default function FetchPractice() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ul>
        {apiData.map((curData) => {
          return (
            <li key={curData.id}>
              <h3>{curData.title}</h3>
              <p>{curData.body}</p>
              <hr />
              <br />
            </li>
          );
        })}
      </ul>
    </>
  );
}
