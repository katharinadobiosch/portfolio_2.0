// import "./App.css";
import "../src/assets/styles/main.css";
import Header from "./patterns/Header";
import Footer from "./patterns/Footer";
import About from "./patterns/About";
import References from "./patterns/References";
import Skills from "./patterns/Skills";
import Contact from "./patterns/Contact";

function App() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <About />
                <References />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
