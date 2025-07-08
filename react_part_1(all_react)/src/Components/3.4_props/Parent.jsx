import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
  };
  return (
    <>
      <h2>Data from Child:{childData}</h2>
      <Child sendDataToParent={handleChildData} />
    </>
  );
}
