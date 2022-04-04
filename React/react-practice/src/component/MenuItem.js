import React, {useState} from "react";



function MenuItem(props) {
    useState(false);
    return <li className="menu-item">{props.children}</li>;
}

export default MenuItem;