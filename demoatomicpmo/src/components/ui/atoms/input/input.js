import React from "react";
import { FormControl } from "react-bootstrap";

function input(props) {
  return <FormControl type="text" className={props.customClass} placeholder={props.customplaceholder} />;
}

export default input;
