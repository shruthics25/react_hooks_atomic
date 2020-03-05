import React from "react";
import { Form } from "react-bootstrap";

function label(props) {
    return <Form.Label className={props.customClass}>{props.labelName}</Form.Label>
}

export default label;