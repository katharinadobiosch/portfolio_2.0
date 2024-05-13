import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/assets/styles/main.css";
import Header from "./patterns/Header";
import Footer from "./patterns/Footer";
import About from "./patterns/About";
import WorkExperience from "./patterns/WorkExperience";
import Skills from "./patterns/Skills";
import Contact from "./patterns/Contact";
import ProjectsOverview from "./patterns/ProjectsOverview";
import Welcome from "./patterns/Welcome";
import * as paths from "./config/paths";
import LegalNotice from "./patterns/LegalNotice";

function App() {
    const scrollToSection = (id) => {
        console.log("Scrolling to section:", id);
        const element = document.getElementById(id);
        console.log("Element:", element);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="site-wrapper">
            <main>
                <BrowserRouter>
                    <Header scrollToSection={scrollToSection} />
                    <Routes>
                        <Route
                            path={paths.HOME}
                            element={
                                <>
                                    <Welcome id="home" />
                                    <About id="about" />
                                    <Skills id="skills" />
                                    <ProjectsOverview id="projects-overview" />
                                    <WorkExperience id="work-experience" />
                                    <Contact id="contact" />
                                </>
                            }
                        />
                        <Route
                            path={paths.LEGAL_NOTICE}
                            element={<LegalNotice />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
