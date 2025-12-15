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
console.log("Store-=-=-=>", Store);

// 3. log in initial state
console.log("initial_state:", Store.getState());

// 4. Dispatch an action to add a task
Store.dispatch({ type: ADD_TASK, payload: "Buy a T-shirt" }); // add1
Store.dispatch({ type: ADD_TASK, payload: "Buy a Trouser" }); // add2
console.log("initial_state:", Store.getState());

Store.dispatch({ type: DELETE_TASK, payload: 0 }); //delete
console.log("initial_state:", Store.getState());

// 5. making it in a function
// a. add func
const addTask = (data) => {
  return Store.dispatch({ type: ADD_TASK, payload: data });
};
// b. del func
const delTask = (index) => {
  return Store.dispatch({ type: DELETE_TASK, payload: index });
};

addTask("chaddi bhi leni hai");
console.log("initial_state:", Store.getState());
delTask(1);
console.log("initial_state:", Store.getState());
