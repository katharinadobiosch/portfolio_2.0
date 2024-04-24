// import "./App.css";
import "../src/assets/styles/main.css";
import Header from "./patterns/Header";
import Footer from "./patterns/Footer";
import About from "./patterns/About";

function App() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
}

export default App;
