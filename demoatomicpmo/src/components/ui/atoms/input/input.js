import React from "react";
import { FormControl } from "react-bootstrap";

function input(props) {
  return <FormControl type="text" className={props.CustomClass} placeholder={props.CustomPlaceHolder} />;
}

export default input;
