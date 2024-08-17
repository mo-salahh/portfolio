import React from 'react';

interface PortfolioItemProps {
    imgSrc: string;
    title: string;
    description: string;
    githubLink: string;
    onViewMore: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imgSrc, title, description, githubLink, onViewMore }) => {
    return (
        <div className="portfolio__content grid">
            <img src={imgSrc} alt={title} className="portfolio__img" />
            <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">
                    {description}
                    <br />
                    <span className="portfolio__link button button--flex button--small button--link" onClick={onViewMore}>
                        View more
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                </p>
                <a href={githubLink} className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">
                    Source code
                    <div className="button__icon">
                        <i className="uil uil-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default PortfolioItem;
