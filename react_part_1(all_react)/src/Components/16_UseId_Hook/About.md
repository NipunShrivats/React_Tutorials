<!-- useId Hook -->

1. used to generate unique ID's that can be passed to accessibility attributes.
2. It helps to ensure that each instance of a component gets a unique ID.
3. useful for associating labels wiṭh input fields and other elements

// Syntax:-
// const id = useId();

4. does not take any parameters.
5. It returns a unique ID string.
6. not to be used to generate keys in a list (eg. while using map function)
7. Also cant access css using this id
