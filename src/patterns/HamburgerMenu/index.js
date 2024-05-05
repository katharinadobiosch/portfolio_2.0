import React, { useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav role="navigation">
                <div id="hamburger-menu" onClick={toggleMenu}>
                    <input type="checkbox" checked={isOpen} readOnly />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul
                        id="hamburger-menu__menu"
                        className={isOpen ? "open" : ""}
                    >
                        <a href="/">
                            <li>home</li>
                        </a>
                        <a href="/">
                            <li>aboutMe</li>
                        </a>
                        <a href="/">
                            <li>skills</li>
                        </a>
                        <a href="/">
                            <li>personalProjects</li>
                        </a>
                        <a href="/">
                            <li>workExperience</li>
                        </a>
                        <a href="/">
                            <li>dropMeALine</li>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
