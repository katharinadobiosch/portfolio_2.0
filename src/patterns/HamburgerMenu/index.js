import React, { useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav role="navigation">
            <div id="hamburger-menu" onClick={toggleMenu}>
                <input type="checkbox" checked={isOpen} readOnly />
                <span></span>
                <span></span>
                <span></span>
                <ul id="hamburger-menu__menu" className={isOpen ? "open" : ""}>
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Info</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                    <a
                        href="https://erikterwan.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li>Show me more</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
};

export default HamburgerMenu;
