import React from "react";
import { Button } from "react-bootstrap";

function Custombutton(props) {
  return <Button variant="outline-primary" className={props.customClass}>{props.buttonName}</Button>;
}

export default Custombutton;
