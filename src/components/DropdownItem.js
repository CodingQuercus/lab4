import React from "react";

import { Link } from "react-router-dom";

function DropdownItem(props) {
    return(
        <li><Link to={props.link}>{props.title}</Link></li>
    )
}

export default DropdownItem;
