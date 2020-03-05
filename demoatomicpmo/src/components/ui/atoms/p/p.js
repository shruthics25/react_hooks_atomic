// import React, { useState } from "react";

// function paragraph() {
//   const [title, setTitle] = useState("Login");
//   const changeTitleFn = () => {
//     setTitle("Register");
//   };
//   return <p onClick={changeTitleFn}>{title}</p>;
// }
// export default paragraph;


import React from "react"; 

function paragraph(props) {
  return <p>{props.content}</p>
}
 export default paragraph;