<!-- forwardRef -->

// it is no longer necessary in react 19. will be depricated in future..

// --> react forwardref allows parent component to move down (or forward) refs to their children.
It gives a child component a reference to DOM entity created by its parent in react
//--> This helps the children to read and modify the elements from any location where it is used

<!-- Syntax -->

React.forwardRef(
(props, ref)=>
{})
