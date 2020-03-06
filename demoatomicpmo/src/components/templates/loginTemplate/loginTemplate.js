import React from "react";
import { Row, Col } from "react-bootstrap";
import Templates from '../index';
import { css } from '../loginTemplate/loginTemplate.css'
import Organisms from "../../ui/organisms";
function LoginTemplate() {
    return (
        <section className="test">
            <Row className="h-100 align-items-center justify-content-center">

                <Col lg="5">
                    <Row>
                        <Col className="text-center">
                            <Templates.Atoms.h1 content="Login" />
                        </Col>
                    </Row>
                    <Templates.Organisms.Logincard />
                </Col>
            </Row>
        </section>
    )
}

export default LoginTemplate