import "../css/experience.css";
import ExperienceCard from "./ExperienceCard.jsx";

function Experience() {
    const cardDetails = [{
        title: "Full-Stack Web Development",
        description: "I develop custom web applications with Laravel and React, including RESTful APIs and dynamic, interactive user interfaces."
    }, {
        title: "Frontend Development",
        description: "I create mobile-first, modern designs using React, JavaScript, HTML5, CSS3, and scalable state management tools like Redux."
    }, {
        title: "Backend Development",
        description: "I design robust APIs with Laravel, manage databases with MySQL, and implement secure authentication using Laravel Sanctum."
    }, {
        title: "API Integration",
        description: "I integrate scalable APIs that enable seamless communication and connectivity between applications and services."
    }, {
        title: "Mobile-Responsive Design",
        description: "I ensure websites perform flawlessly across devices, delivering smooth and user-friendly experiences on mobile, tablet, and desktop."
    }, {
        title: "Git & Github",
        description: "Proficient in Git and GitHub, I maintain seamless collaboration and effective communication within team projects."
    }, {
        title: "Learning and Adaptation",
        description: "I embrace new technologies, solve complex challenges, and consistently enhance my skills to deliver innovative web solutions."
    },
    ]


    return (
        <div className="experience">
            {cardDetails.length > 0 && cardDetails.map((card, index) => (
                <ExperienceCard key={index} detail={{title: card.title, description: card.description}}/>))}
        </div>
    )
}

export default Experience;