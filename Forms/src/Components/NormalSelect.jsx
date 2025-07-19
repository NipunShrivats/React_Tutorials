import React, { useState } from "react";
import data from "../Data/data.json";

export default function NormalSelect() {
  const [category, setcategory] = useState("");
  const [item, setItem] = useState("");
  const [subItem, setSubItem] = useState("");

  // ---------- onchange handlers-----------
  const handleCategoryOnchange = (e) => {
    setcategory(e.target.value);
    setItem("");
  };
  const handleItemOnchange = (e) => {
    setItem(e.target.value);
    setSubItem("");
  };
  const handleSubItemOnchange = (e) => {
    setSubItem(e.target.value);
  };

  return (
    <>
      <form action="">
        {/* First Dropdown */}
        <select
          name=""
          id=""
          value={category}
          onChange={handleCategoryOnchange}
        >
          <option value="select category">select category</option>
          {Object.keys(data[0])?.map((curEle) => (
            <option value={curEle} key={curEle}>
              {curEle}
            </option>
          ))}
        </select>
        {/* Second Dropdown */}
        {category !== "select category" && data[0][category] && (
          <select name="" id="" value={item} onChange={handleItemOnchange}>
            <option value="">select items</option>
            {Object.keys(data[0][category])?.map((curEle) => (
              <option value={curEle} key={curEle}>
                {curEle}
              </option>
            ))}
          </select>
        )}
        {/*Third Dropdown */}
        {category !== "select category" &&
          item &&
          Array.isArray(data[0][category][item]) && (
            <select
              name=""
              id=""
              value={subItem}
              onChange={handleSubItemOnchange}
            >
              <option value="">select Subitems</option>
              {data[0][category][item]?.map((curEle) => (
                <option value={curEle} key={curEle}>
                  {curEle}
                </option>
              ))}
            </select>
          )}
      </form>
    </>
  );
}
