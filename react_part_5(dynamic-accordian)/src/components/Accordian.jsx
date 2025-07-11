import React, { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "../UI/FAQ";

export default function Accordian() {
  const [data, setData] = useState([]);

  const [activeID, setActiveID] = useState(false);

  const handleButton = (id) => {
    setActiveID((prevID) => (prevID === id ? false : id));
    //if "prevID" is any "id" then replace it with "false" else add curElem.id
  };

  useEffect(() => {
    setData(faq);
  }, []);

  return (
    <>
      <h1>The Accordian</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ
              key={curElem.id}
              curData={curElem}
              isActive={activeID === curElem.id}
              onToggle={() => handleButton(curElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
}
