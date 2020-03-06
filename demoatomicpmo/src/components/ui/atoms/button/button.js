import React from "react";
import { Button } from "react-bootstrap";

function Custombutton(props) {
  return <Button variant="outline-primary" className={props.CustomClass}>{props.ButtonName}</Button>;
}

export default Custombutton;
