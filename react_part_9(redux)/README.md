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
   b. Everything you do with redux weather adding, removing, or updating data goes through this store.
   c. Like a database for your app, but only for manageing data in memory(not permanent storage).

   store working

   1. The "createStore" method creates the redux store using a reducer function that handles how the state changes in reponse to actions.
   2. dispatch() is used to send actions to the Redux store. An action describes what change you want to make to the state(such as adding task).
   3. getState() - It retrives the current state of the redux store.
      This is useful for accessing the state after it has been updated or monitor changes.

2. Redux Action:-
   a. This is an object, which tell the redux what to do (like adding a task).
   b. Must have a type property that describes the action.
   c. eg:-

   ```
      {
         type:"counter/add",
         payload:{
            incrementBy:10,
         }
      }
   ```

   d. Action Creator - it is a function thatr creates an object that meakes it easier to create actions with different data.

3. Redux Reducers:-
   a. How to do, It actually changes the data in the storage based on the actions.
   b. It takes the current state and an action, and returns a new state.
   c. reducer must always return a new state.
   d. They Should never modify the old state directly.

   e. The reducer takes 2 arguments:

   1. State: This is the current state.
   2. Action: This tells the reducer what to do. It has a type and sometimes a payload (which is the data)

   f. We use switch statements to check the actions type. Based on the action type, the reducer updates the state.

## Connecting React with Redux

1. To use Redux in a React app, we need to connect redux's store and actions to React components.
2. This allows components to access the global state and dispatch actions.
3. npm install react-redux

## Access redux State - useSelector() Hook.

1. used to read data from the redux store.
2. syntax:-

```
const count = useSelector(state=> state.property);
```

3. We define a selector function that takes the entire redux store state as an argument and returns the specific piece of data we need.

## Dispatch Actions - useDispatch() hook

1. use the useDispatch hook to dispatch actions from a React component.
