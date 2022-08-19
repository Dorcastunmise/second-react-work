import React from "react";
import './NavBar.css';
import photo from "./logo.svg";

function NavBar() {
    return (
        <nav>
            <img src={photo} />
            <h3 className="first">ReactFacts</h3>
            <h4 className="later">React Course - Project 1</h4>
        </nav>
    )
}
export default NavBar