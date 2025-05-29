import React, { useEffect, useState } from "react";
import { postPost, updatePost } from "../api/PostApi";

export default function SearchForm({
  apiData,
  setApiData,
  updateApiData,
  setUpdateApiData,
}) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateApiData).length === 0;

  useEffect(() => {
    updateApiData &&
      setAddData({
        title: updateApiData.title || "",
        body: updateApiData.body || "",
      });
  }, [updateApiData]);

  const handleInputChange = (event) => {
    const name = event.target.name; // title, body
    const value = event.target.value; // uski respective value
    setAddData((prev) => {
      return { ...prev, [name]: value }; //{empty + title:value & body:value}
    });
  };

  const handFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    console.log("action:", action);
    if (action === "Add Post") {
      addPostData();
    } else if (action === "Edit Post") {
      updatePostData();
    }
  };

  // add data
  const addPostData = async () => {
    const res = await postPost(addData);
    console.log("res", res);

    if (res.status === 201) {
      setApiData([...apiData, res.data]);
      setAddData({ title: "", body: "" }); // will get empty after value is entered
    }
  };

  // Update data
  const updatePostData = async () => {
    try {
      const res = await updatePost(updateApiData.id, addData);
      // console.log(res);
      if (res.status === 200) {
        setApiData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === updateApiData.id ? res.data : curElem;
          });
        });
        setAddData({ title: "", body: "" });
        setUpdateApiData({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handFormSubmit}
        className=" flex flex-col items-center justify-center m-2 p-2 gap-2"
      >
        <div>
          <label htmlFor="title"></label>
          <input
            className="outline-none border-0 
            bg-gray-400 
            hover:bg-gray-300 
            px-2 py-2 w-[30rem]  
            rounded-[.2rem] 
            duration-300"
            type="text"
            autoComplete="off"
            id="title"
            placeholder="Add Title"
            name="title"
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="body"></label>
          <textarea
            className="outline-none border-0 
            border-amber-50 
            px-2 py-1 bg-gray-400 
            hover:bg-gray-300 
            w-[30rem] 
            h-[10rem] 
            rounded-[.2rem] 
            duration-300"
            type="text"
            autoComplete="off"
            id="body"
            placeholder="Add Post"
            name="body"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <button
          value={isEmpty ? "Add Post" : "Edit Post"}
          type="submit"
          className={`
            border-0
            outline-0
            border-amber-50
            text-white
            w-[15rem]
            h-[2.5rem]
            rounded-[.2rem]
            cursor-pointer
            ${
              isEmpty
                ? "bg-blue-900 hover:bg-blue-800"
                : "bg-green-600 hover:bg-green-500"
            }`}
        >
          {isEmpty ? "Add Post" : "Edit Post"}
        </button>
      </form>
    </>
  );
}
