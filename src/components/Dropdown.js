import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Dropdown(props) {

    const [visible, setVisible] = useState(true);

    const toggleDropdown = () => {
        setVisible(!visible)
    };

    return (
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link to={props.link} >{props.title}</Link>
            <ul className="dropdown" id={visible ? "" : "active"} >
                {props.children}
            </ul>
        </li>
    )
}