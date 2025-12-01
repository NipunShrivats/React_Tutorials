/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state, //copy old state
        task: [...state.task, action.payload], //Added new
      };
    case DELETE_TASK:
      const updatedTask = state.task.filter((_curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: [...state.task, updatedTask],
      };

    default:
      break;
  }
};
