import React, { useContext } from "react";
import { BioContext } from "./Index";

export default function Services() {
  const { myName, Age } = useContext(BioContext);
  return (
    <div>
      Name: {myName}, {Age} - SERVICE PAGE
    </div>
  );
}
