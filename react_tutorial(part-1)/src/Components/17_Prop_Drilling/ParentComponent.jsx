import React from "react";

export default function ParentComponent() {
  return (
    <>
      <div>
        <h1>Component A</h1>
        <ChildComponent data="React Js" />
      </div>
    </>
  );
}

const ChildComponent = (props) => {
  return (
    <>
      <div>
        <h1>Component B</h1>
        <GrandChildComponent data={props.data} />
      </div>
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <div>
        <h1>Component C</h1>
        <GreatGrandChildComponent data={props.data} />
      </div>
    </>
  );
};

const GreatGrandChildComponent = (props) => {
  return (
    <>
      <div>
        <h1>Component D: {props.data}</h1>
        {/* finally reached to the last element that actually has to use. */}
      </div>
    </>
  );
};
