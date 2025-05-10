import React, { useState } from "react";

export default function HowNotToFetchAPI() {
  const [apiData, setApiData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setApiData(data)) // this is totally wrong because it will keep keep requesting on the network tab on loop.
    .catch((error) => console.log(error));
  return (
    <>
      <div>
        data:
        {apiData.map((curData) => {
          return (
            <li key={apiData.id}>
              <h3>{curData.title}</h3>
              <p>{curData.body}</p>
            </li>
          );
        })}
      </div>
    </>
  );
}
