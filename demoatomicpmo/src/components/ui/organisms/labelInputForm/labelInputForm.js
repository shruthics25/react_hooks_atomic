import React from "react";
import { Form } from "react-bootstrap";
import Molecules from "../../molecules"
function LabelInputForm(props) {
    return (
            <Form.Group className={props.class}>
                <Molecules.LabelInput />
           </Form.Group>

    )
}

export default LabelInputForm;