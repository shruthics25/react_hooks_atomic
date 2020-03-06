import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import Atoms from '../../atoms';
function Header() {
    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand >React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Atoms.NavLink Href="#HOME" LinkName="Home" />
                    <Atoms.NavLink Href="#ABOUT" LinkName="about" />
                </Nav>
                <Atoms.input customClass="w-25 mr-3" />
                <Atoms.Custombutton customClass="bg-white" buttonName="Logout" />
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    )
}

export default Header;