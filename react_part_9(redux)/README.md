## Redux - A state managemnet library

1. Helps manage state using single store(redux store), pure reducer functions and strict data-flow rules.

## Redux Advantages:-

1. Centralized state managemnet -
   Redux stores your app's state in one place, making it easier to manage and access data accross components.
2. Global Access -
   Any Component can access and update the state without passing props down.
3. Predictable Updates -
   State changes are controlled and predictable using reducers.
4. DevTools -
   Powerfull tools for debugging, inspecting state, and replaying actions.
5. Async Support -
   Middleware like Thunk or Saga handles async tasks, keeping the code clean

## Working:-

1. Redux Store:-
   a. It is a big box where all your applications data is kept safe.
   b. Everything you do with redux whether adding, removing, or updating data goes through this store.

2. Redux Action:-
   a. This is an object, which tell the redux what to do (like adding a task).
   b. eg:-

   ```
      {
         type:"counter/add",
         payload:{
            incrementBy:10,
         }
      }
   ```

3. Redux Reducers:-
   a. How to do, It actually changes the data in the storage based on the actions.
   b. It takes the current state and an action, and returns a new state.
   c. reducer must always return a new state.
   d. They Should never modify the old state directly.

   e. The reducer takes 2 arguments:

   1. State: This is the current state.
   2. Action: This tells the reducer what to do. It has a type and sometimes a payload (which is the data)

   f. We use switch statements to check the actions type. Based on the action type, the reducer updates the state.
