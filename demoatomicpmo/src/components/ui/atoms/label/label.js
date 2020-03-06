import React from "react";
import { Form } from "react-bootstrap";

function label(props) {
    return <Form.Label className={props.CustomClass}>{props.LabelName}</Form.Label>
}

export default label;