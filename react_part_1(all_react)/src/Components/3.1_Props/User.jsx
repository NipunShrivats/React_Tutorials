import React from "react";

// part1
// export default function User(props) {
//   const { name, age } = props;
//   return (
//     <div>
//       <h1>
//         UserName : {name}, {age}
//       </h1>
//     </div>
//   );
// }

// part2 - passing props in object
export default function User(props) {
  const { name, age, email } = props.userDetails;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Email: {email}</h1>
    </div>
  );
}
