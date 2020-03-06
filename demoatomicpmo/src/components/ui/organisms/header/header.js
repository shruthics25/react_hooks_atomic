import React from "react";
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import Organisms from '../../organisms/index';
function Header() {
    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand >React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Organisms.Atoms.NavLink Href="#HOME" LinkName="Home" />
                    <Organisms.Atoms.NavLink Href="#ABOUT" LinkName="about" />
                </Nav>
                <Organisms.Atoms.input customClass="w-25 mr-3" />
                <Organisms.Atoms.Custombutton customClass="bg-white" buttonName="Logout" />
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    )
}

export default Header;