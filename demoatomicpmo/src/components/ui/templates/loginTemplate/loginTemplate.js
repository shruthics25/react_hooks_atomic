import React from "react";
import { Row, Col } from "react-bootstrap";
import './loginTemplate.css'
import Organisms from "../../organisms";
import Atoms from '../../atoms'
function LoginTemplate() {
    return (
        <section className="test">
            <Row className="h-100 align-items-center justify-content-center">
                <Col lg="5">
                        <Atoms.h1 content="Login" />
                        <Organisms.LabelInputForm />
                        <Organisms.LabelInputForm />
                        <Atoms.Custombutton buttonName="Login"/> 
                </Col>
            </Row>
        </section>

    )
}

export default LoginTemplate