import React, { useState } from "react";

const HamburgerMenu = ({ scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (id) => {
        scrollToSection(id);
        setIsOpen(false); // Close the menu
    };

    return (
        <div>
            <nav role="navigation">
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <input type="checkbox" checked={isOpen} readOnly />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul
                        className={`hamburger-menu__menu ${
                            isOpen ? "open" : ""
                        }`}
                    >
                        <li onClick={() => handleClick("home")}>home</li>
                        <li onClick={() => handleClick("about")}>aboutMe</li>

                        <li onClick={() => handleClick("skills")}>skills</li>
                        <li onClick={() => handleClick("projects-overview")}>
                            personalProjects
                        </li>
                        <li onClick={() => handleClick("work-experience")}>
                            workExperience
                        </li>
                        <li onClick={() => handleClick("contact")}>
                            dropMeALine
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
