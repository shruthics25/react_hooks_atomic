import React from "react";
import { Form } from "react-bootstrap";
import Atoms from "../../atoms";

function Formgroup(props) {
    return (
        <section className="pt-4">

        <Form.Group className={props.class}>
            <Atoms.label labelName="Email" />
            <Atoms.input customplaceholder="Enter Email"/>
        </Form.Group>
         <Form.Group className={props.class}>
            <Atoms.label labelName="Password" />
            <Atoms.input customplaceholder="Enter Placeholder"/>
        </Form.Group>
        </section>

    )
}

export default Formgroup;