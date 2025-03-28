import "../css/about.css";

function About() {

    return (
        <div className="about-container">
            <div className="about-image">
            </div>
            <div className="about-me">
                <h1 className="about-me-title">About Me</h1>
                <p className="about-me-description">
                    I’m a passionate junior full-stack web developer with a focus on building modern, scalable, and responsive web applications.
                    Leveraging my expertise in Laravel and React, I create robust APIs, intuitive user interfaces, and seamless mobile-friendly designs.
                    As a fast learner, I’m dedicated to writing clean, efficient code and continuously enhancing my skills to deliver solutions that
                    meet unique project needs while ensuring exceptional performance and user experiences.
                </p>
                <div className="resume-button-container">
                    <button className="resume-button">Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default About;