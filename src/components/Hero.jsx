import "../css/hero.css";

function Hero() {
    return (
        <div className="hero">
            <div className="typewriter-container">
                <p className="typewriter">I specialise in Frontend and Backend solutions.</p>
                {/*<p className="typewriter">I'm passionate about building modern web applications.</p>*/}
                {/*<p className="typewriter">I specialise in Frontend and Backend solutions.</p>*/}
            </div>
            <div className="intro">
                <p className="intro-text">
                    I'm Arjun, a Junior Software Developer.
                </p>
            </div>
            <div className="intro-description">
                <p className="intro-desc-text">
                    Building scalable and seamless web applications tailored to business needs.
                </p>
            </div>
            <div className="hire-me">
                <button className="hire-me-button">Hire me</button>
            </div>
        </div>
    )
}

export default Hero;