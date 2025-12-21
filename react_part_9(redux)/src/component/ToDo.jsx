import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { addTask, delTask } from "../Store";

const ToDo = () => {
  const state = useSelector((state) => state.task);

  const [task, setTask] = useState();
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    dispatch(addTask(task));
    setTask("");
  };
  const handleFormDel = (index) => {
    dispatch(delTask(index));
    setTask("");
  };
  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>To-do List:
        </h1>
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleFormSubmit}>Add Task</button>
        </div>
        <ul id="list-container">
          {state.map((curTask, index) => {
            return (
              <>
                <li key={index}>
                  <p>
                    {index + 1}: {curTask}{" "}
                    <MdDelete onClick={() => handleFormDel(index)} />
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
