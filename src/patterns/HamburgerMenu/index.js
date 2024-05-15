import React, { useState } from "react";

const HamburgerMenu = ({ scrollToSection }) => {
    const handleClick = (id) => {
        console.log("Clicked on menu item:", id);
        scrollToSection(id);
        setIsOpen(false); // Close the menu
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                        <li onClick={() => scrollToSection("home")}>home</li>
                        <li onClick={() => handleClick("about")}>aboutMe</li>

                        <li onClick={() => scrollToSection("skills")}>
                            skills
                        </li>
                        <li
                            onClick={() => scrollToSection("projects-overview")}
                        >
                            personalProjects
                        </li>
                        <li onClick={() => scrollToSection("work-experience")}>
                            workExperience
                        </li>
                        <li onClick={() => scrollToSection("contact")}>
                            dropMeALine
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
