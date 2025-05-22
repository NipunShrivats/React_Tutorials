<!-- useEffect Hook:- -->

// Is used for handling side effects in functional components.

<!-- syntax:-  -->
<!-- useEffect(()=>{
return()=>{
}
},[dependencies]); -->

1. initial render: when the components mounts, useEffect can run its effect function to perform operatios like data fetching.

2. Dependencies: The array of dependencies, which determines when effect should re-run, if any value in array changes , the effect will re-run.

3. cleanup: useEffect can return a cleanup function to clean up after the effect, such unsubscribing from an event or clearing a timer.

<!-- // Fetching Data as a side Effect // -->

while fetching data in react component, a side effect is being performed.
External interactions: you are interacting with an external data source, such as an API or a server
state updates: fetched data will usually update the componenṭs state, causing a re-render
