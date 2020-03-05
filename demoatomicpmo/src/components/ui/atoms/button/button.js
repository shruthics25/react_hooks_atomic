import React from "react";
import { Button } from "react-bootstrap";

function Cbutton(props) {
  return <Button variant="outline-primary" className={props.customClass}>{props.buttontnName}</Button>;
}

export default Cbutton;
