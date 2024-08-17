import React from "react";

interface PortfolioItemProps {
  imgSrc: string;
  title: string;
  description: string;
  links: { title: string; href: string }[];
  onViewMore: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imgSrc,
  title,
  description,
  links,
  onViewMore,
}) => {    
  return (
    <div className="portfolio__content grid">
      <img src={imgSrc} alt={title} className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">{title}</h3>
        <p className="portfolio__description">
          {description}
          <br />
          <span
            className="portfolio__link button button--flex button--small button--link"
            onClick={onViewMore}
          >
            View more
            <i className="uil uil-arrow-right button__icon"></i>
          </span>
        </p>
        {links.map((link) =>
          link.href ? (
            <a
              key={link.href}
              href={link.href}
              style={{marginRight: 8}}
              className="button button--flex button--small portfolio__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title ? link.title : link.href}
              <div className="button__icon">
                <i className="uil uil-arrow-right"></i>
              </div>
            </a>
          ) : null
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
