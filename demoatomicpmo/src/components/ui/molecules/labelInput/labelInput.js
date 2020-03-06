import React from "react";
import Atoms from "../../atoms";

function LabelInput(props) {
    return (
            <>
                <Atoms.label labelName={props.label} />
                <Atoms.input customplaceholder={props.inputPlaceHolder}/>
           </>

    )
}

export default LabelInput;