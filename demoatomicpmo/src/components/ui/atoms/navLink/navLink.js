import React from "react";
import { Nav } from "react-bootstrap";


function NavLink(props) {
    return <Nav.Link href={props.Href}>{props.LinkName}</Nav.Link>
}

export default NavLink;