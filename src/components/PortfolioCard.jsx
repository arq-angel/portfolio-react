function PortfolioCard({project}) {
    //need to handle this error by using else where i put default image in place of null image
    const imageUrl = new URL(`../assets/${project.image??null}`, import.meta.url).href;

    return (
        <div className="portfolio-card">
            <img className="project-image" src={imageUrl} alt="project image"/>
        </div>
    )
}

export default PortfolioCard;