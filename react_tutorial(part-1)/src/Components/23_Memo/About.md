<!-- React.memo() -->
<!-- checks if the props are changing in a component. -->

1. It is used for memoization of functional components
2. If the props of a memoized component have not changed, React skips the rendring for that component, using the cached result instead.
3. Do memoization only when necessary.

--- OR ---

React.memo() is a higher-order component that we can use to wrap components that we do not want to "re-render" unless props within them "changed"

<!-- --------------------------------------------- -->

<!-- useMemo Hook -->

// syntax:

<!-- const memoizedValue = useMemo(()=>{
    logic computation
    return computed value
},[dependencies]) -->

1. useMemo is React hook used for memoization.[meoization of values]
2. Memoization is a technique to optimize performance by caching the results of expensive function calls.
3. use it when you want to prevent unnecessary re-execution of a function on every render.
4. useful for optimizing performance in situations where calculations or operations are computationally expensive.
5. Overusing useMemo might lead to unnecessary complexity and impact readability.
   <!-- ----------------------------- -->
   <!-- Note -->
   useMemo - for optimizing values
   useCallback - for optimizing functions
