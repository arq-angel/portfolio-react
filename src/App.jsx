import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";

function App() {

    return (
        <div className="app">
            <Header/>
            <div className="main">
                <Experience />
                <About/>
                <Portfolio/>
                <Skills/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
