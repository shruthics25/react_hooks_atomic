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

function p(props) {
  return <p className={props.customClass}>{props.content}</p>
}
 export default p;