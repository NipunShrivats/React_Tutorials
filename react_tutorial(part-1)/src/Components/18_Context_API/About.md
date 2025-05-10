<!-- It is very easy -->
<!-- Context API -->

1. A way to pass data through the component tree without having to pass props down manually at every level.
2. Solves the problem of prop drilling.

--> step 1 - createContext: Create a context object.
--> step 2 - Provider: A component that provides the context value to its children.
--> step 3 - useContext(Consumer): A hook that allows you to consume a context

<!-- Note -->

single value in provider = {}
multiple values in provider = {{}}
