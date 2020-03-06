import React from "react";
import Atoms from "../../atoms";

function LabelInput(props) {
    return (
            <>
                <Atoms.label LabelName={props.Label} />
                <Atoms.input CustomPlaceHolder={props.InputPlaceHolder}/>
           </>

    )
}

export default LabelInput;