import "../css/portfolio.css";
import PortfolioCard from "./PortfolioCard.jsx";

function Portfolio() {
    const projects = [
        {title: "Messaging app", subtitle: "A real-time messaging application built using Laravel and WebSockets.", image: "project.png"},
        {title: "Messaging app", subtitle: "A real-time messaging application built using Laravel and WebSockets.", image: "project.png"},
        {title: "Messaging app", subtitle: "A real-time messaging application built using Laravel and WebSockets.", image: "project.png"},
        {title: "Messaging app", subtitle: "A real-time messaging application built using Laravel and WebSockets.", image: "project.png"},
        {title: "Messaging app", subtitle: "A real-time messaging application built using Laravel and WebSockets.", image: "project.png"},
        {title: "Messaging app", subtitle: "A real-time messaging application built using Laravel and WebSockets.", image: "project.png"},
    ];


    return (
        <div className="portfolio-container">
            <div className="portfolio-title-container">
                <h1 className="portfolio-title">My Projects</h1>
            </div>
            <div className="portfolio-subtitle-container">
                <p className="portfolio-subtitle">A showcase of my work, highlighting innovative solutions in web and mobile application development.</p>
            </div>
            <div className="portfolio-tags-container">
                <button className="portfolio-tag-button">All Projects</button>
                <button className="portfolio-tag-button">Web Development</button>
                <button className="portfolio-tag-button">REST API</button>
                <button className="portfolio-tag-button">Mobile Application</button>
                <button className="portfolio-tag-button">Full Stack Development</button>
            </div>
            <div className="portfolio-cards-container">
                {projects.length > 0 && projects.map((project, index) => (
                    <PortfolioCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;