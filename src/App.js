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
import UnsereTiere from "./patterns/UnsereTiere";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 60; // Height of the header
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
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
            <Route path={paths.LEGAL_NOTICE} element={<LegalNotice />} />
            <Route path={paths.UNSERE_TIERE} element={<UnsereTiere />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
