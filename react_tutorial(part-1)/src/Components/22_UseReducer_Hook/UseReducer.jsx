import React, { useReducer } from "react";

export default function UseReducer() {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };
  const reducer = (state, action) => {
    //   if (action.type === "INC") {
    //     return state + 1;
    //   }
    //   if (action.type === "DEC") {
    //     return state - 1;
    //   }
    //   if (action.type === "RE") {
    //     return (state = 0);

    switch (action.type) {
      case "INC":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DEC":
        return { ...state, count: state.count - 1 };
      case "RE":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(useReducer());
  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
        <br />
        <button onClick={() => dispatch({ type: "INC" })}>INC</button>
        <br />
        <button onClick={() => dispatch({ type: "RE" })}>RE</button>
      </div>
    </>
  );
}
