function ExperienceCard({detail}) {
    return (
        <div className="card">
            <div className="card-title-container">
                <span className="hyphen">-</span><p className="card-title">{detail.title}</p>
            </div>
            <div className="card-description-container">
                <p className="card-description">{detail.description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;