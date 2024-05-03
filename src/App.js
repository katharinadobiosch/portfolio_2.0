import React from "react";
import "../src/assets/styles/main.css";
import Header from "./patterns/Header";
import Footer from "./patterns/Footer";
import About from "./patterns/About";
import References from "./patterns/References";
import Skills from "./patterns/Skills";
import Contact from "./patterns/Contact";
import ProjectsOverview from "./patterns/ProjectsOverview";
import AppRouter from "./routes/AppRouter";
import Welcome from "./patterns/Welcome";

function App() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <AppRouter />
                <Welcome />
                <About />
                <References />
                <ProjectsOverview />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
