import React, { useEffect, useState } from "react";
import { delPost, getPost } from "../api/PostApi";

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

  // Delete Function
  const handleDeletePost = async (id) => {
    const res = await delPost(id);
    console.log(res);
  };

  return (
    <>
      <section className="bg-black p-[2rem] border-4 border-white">
        <ul className="flex flex-row flex-wrap gap-[1rem]">
          {apiData.map((curEle) => {
            const { id, title, body } = curEle;
            return (
              <li
                key={id}
                className="border-1 rounded-[.8rem] flex-1/4 px-2 py-[1rem] bg-gradient-to-br from-slate-100 to-sky-100"
              >
                <p>{id}.</p>
                <p className="h-[3.5rem] ">
                  <span className="font-bold">Title:</span> {title}
                </p>
                <p className="h-[7rem]">
                  <span className="font-bold">News:</span> {body}
                </p>
                <div className="flex gap-[1rem]">
                  <button className="px-[2rem] py-[.3rem] rounded-[.2rem] bg-green-400 hover:bg-green-300 transition-all duration-300 cursor-pointer">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePost()}
                    className=" px-[2rem] py-[.3rem] rounded-[.2rem] bg-red-400 hover:bg-red-300 transition-all duration-300 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
