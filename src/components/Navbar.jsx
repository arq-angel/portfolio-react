import "../css/navbar.css";
import {useState} from "react";

function Navbar() {
    const [activeLink, setActiveLink] = useState("");

    const handleClick = (link) => {
        setActiveLink(link);
    }

    return (
        <div className="navbar">
            <div className="left">
                <a href="#" className="nav-link icon"></a>
            </div>
            <div className="right">
                <a
                    href="#"
                    className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                    onClick={() => handleClick("Home")}
                >
                    Home
                </a>
                <a
                    href="#"
                    className={`nav-link ${activeLink === "About" ? "active" : ""}`}
                    onClick={() => handleClick("About")}
                >
                    About
                </a>
                <a
                    href="#"
                    className={`nav-link ${activeLink === "Portfolio" ? "active" : ""}`}
                    onClick={() => handleClick("Portfolio")}
                >
                    Portfolio
                </a>
                <a
                    href="#"
                    className={`nav-link ${activeLink === "Skills" ? "active" : ""}`}
                    onClick={() => handleClick("Skills")}
                >
                    Skills
                </a>
                <a
                    href="#"
                    className={`nav-link ${activeLink === "Contact" ? "active" : ""}`}
                    onClick={() => handleClick("Contact")}
                >
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Navbar;