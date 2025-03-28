import "../css/header.css";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";

function Header() {
    return (
        <div className="header">
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header;