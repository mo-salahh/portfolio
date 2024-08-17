import React from 'react';

interface ScrollSectionProps {
    target: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ target }) => {
    return (
        <div className="home__scroll">
            <a href={target} className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    );
};

export default ScrollSection;
