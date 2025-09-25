import React from "react";
import  './GenericHeader.css';
import Logo from "../logo/Logo";


function GenericHeader() {
    return <div id="header-container">
        <header id="header">
           <nav className="navbar">
            <Logo></Logo>
            <ul className="navItems">
                <li>Home</li>
                <li>About</li>
                <li>Carrier</li>
                <li>Contacts</li>
            </ul>
           </nav>
        </header>
    </div>;
}

export default GenericHeader;