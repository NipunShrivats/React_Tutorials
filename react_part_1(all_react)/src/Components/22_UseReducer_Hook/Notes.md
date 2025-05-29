## useReducer

--> alternate to useState

1. It returns an array containing the current state and a dispatch function.

2. Dispatch Function: it is used to send actions to the reducer, which in turn updates the state based on the actions type and any associated data(payload).

3. Reducer Function: A function that takes the current state and an action as arguments, and returns a new state.

4. Initial State: The initial State value. (The initial state can be a simple value, and object, or even derived from a function if the initialization is complex)

#### syntax:

const[state, dispatch] = useReducer(reducer, initialState);
