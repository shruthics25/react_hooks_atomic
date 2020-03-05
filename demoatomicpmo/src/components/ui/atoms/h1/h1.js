import React from "react";

function h1(props) {
  return <h1 className={props.customClass}>{props.content}</h1>;
}

export default h1;
