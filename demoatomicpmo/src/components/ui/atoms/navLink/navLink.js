import React from "react";
import { Nav } from "react-bootstrap";


function NavLink(props) {
    return <Nav.Link href={props.Href} className={props.customClass}>{props.LinkName}</Nav.Link>
}

export default NavLink;