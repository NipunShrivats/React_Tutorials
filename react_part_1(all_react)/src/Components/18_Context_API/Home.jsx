import React, { useContext } from "react";
import { BioContext } from "./Index";

export default function Home() {
  const { myName, Age } = useContext(BioContext);
  return (
    <div>
      My Name: {myName}, {Age}
    </div>
  );
}
