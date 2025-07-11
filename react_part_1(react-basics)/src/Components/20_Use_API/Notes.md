## "use" API/Hook

1. use is a React API that lets you read the value of a resource like a "Promise" or "Context".
2. New version says to use "use api" rather than useContext Hook.

#### syntax:-

const value = use(resource);

### HOW IT WORKS

1.  When a context is passed to "use", it works like useContext.
2.  While "useContext" must be called at the top level of your component, "use" can be called inside conditionals like "if" and loops like "for".
3.  "use" is prefered over "useContext" because it is more flexible.
