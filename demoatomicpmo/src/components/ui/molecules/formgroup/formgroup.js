import React from "react";
import { Form } from "react-bootstrap";
import atoms from "../../atoms";

function customformgroup() {
    return (
        <Form.Group>
            <atoms.label labelName="Email" />
            <atoms.input customplaceholder="Enter Email"/>
        </Form.Group>
    )
}

export default customformgroup;