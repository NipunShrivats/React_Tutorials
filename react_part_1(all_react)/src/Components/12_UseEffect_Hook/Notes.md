## useEffect Hook:-

#### --> Is used for handling side effects in functional components.

1. initial render: when the components mounts, useEffect can run its effect function to perform operatios like data fetching.

2. Dependencies: The array of dependencies, which determines when effect should re-run, if any value in array changes , the effect will re-run.

3. cleanup: useEffect can return a cleanup function to clean up after the effect, such unsubscribing from an event or clearing a timer.

#### --> syntax:-

useEffect(()=>{
return()=>{
}
},[dependencies]);

### Fetching Data as a side Effect

while fetching data in react component, a side effect is being performed.
External interactions: you are interacting with an external data source, such as an API or a server
state updates: fetched data will usually update the componenṭs state, causing a re-render

## useLayoutEfect Hook

1. "useLayoutEfect" runs synchronously after a render but before the screen is updated.
2. but "useEffect" runs asynchronously and after a render is printed to the screen.

#### Note:-

1. It prints before all outputs causing blocking effect because of "synchronous property".
2. "useLayoutEfect" runs even before "useEffect".
3. We use react for a purpose it serves of asynchronous operations, that is why the "useLayoutEffect" if barely used.
