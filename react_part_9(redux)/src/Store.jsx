import { createStore } from "redux";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
  isLoading: false,
};

// 1. Create a simple reducer function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state, //copy old state
        task: [...state.task, action.payload], //Added new
      };
    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

// 2. Create the Redux Store using the reducer
export const Store = createStore(taskReducer);
// 3. Create action functions
// a. add func
// eslint-disable-next-line react-refresh/only-export-components
export const addTask = (data) => ({ type: ADD_TASK, payload: data });

// b. del func
// eslint-disable-next-line react-refresh/only-export-components
export const delTask = (index) => ({ type: DELETE_TASK, payload: index });

// addTask("Buy a car");
// addTask("Buy a PS5");
// addTask("chaddi bhi leni hai");
