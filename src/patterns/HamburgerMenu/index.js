import React, { useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        toggleMenu(); // Close the menu after clicking on a section
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
                        <li onClick={() => scrollToSection("about")}>
                            aboutMe
                        </li>
                        <li onClick={() => scrollToSection("skills")}>
                            skills
                        </li>

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
