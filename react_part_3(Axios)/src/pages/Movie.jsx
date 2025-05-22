// import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import { getMovie } from "../services/GetServices";

export default function Movie() {
  const [data, setData] = useState([]);
  // const API = `https://www.omdbapi.com/?i=tt3896198&apikey=3f5e058&s=titan&page=1`;

  const getMovieData = async () => {
    try {
      // 1st method
      // const res = await axios.get(API);

      // 2nd method
      const res = await getMovie();

      // console.log(res);
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.error("Error message:", error.message);
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <div>
        <ul className="border-2 m-[2rem] flex flex-wrap items-center justify-center">
          {data.map((curEle) => {
            return <Card key={curEle.imdbID} movieData={curEle} />;
          })}
        </ul>
      </div>
    </>
  );
}
