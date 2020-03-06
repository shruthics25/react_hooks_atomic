import React from "react";
import { Row, Col } from "react-bootstrap";
import './loginTemplate.css'
import Organisms from "../../organisms";
import Atoms from '../../atoms'
function LoginTemplate() {
    return (
            <Row className="h-100 align-items-center justify-content-center">
                <Col lg="5">
                    <Row>
                        <Col className="text-center">
                            <Atoms.h1 content="Login" />
                        </Col>
                        <Organisms.LabelInputForm />
                        <Organisms.LabelInputForm />
                        
                    </Row>
                </Col>
            </Row>
    )
}

export default LoginTemplate