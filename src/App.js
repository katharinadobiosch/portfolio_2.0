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
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <BrowserRouter>
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
