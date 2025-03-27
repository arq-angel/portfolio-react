import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <div className="app">
            <div className="container">
                <Navbar />
                <Hero />
                <div className="main">
                    <About />
                    <Portfolio />
                    <Skills />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
