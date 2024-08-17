import React from 'react';
import { HomeDataSection } from '../types';

const DataSection: React.FC<HomeDataSection> = ({ title, subtitle, description, contactLink }) => {
    return (
        <div className="home__data">
            <h1 className="home__title">{title}</h1>
            <h3 className="home__subtitle">{subtitle}</h3>
            <p className="home__description">{description}</p>
            <a href={contactLink} className="button button--flex">
                Contact Me <i className="uil uil-message button__icon"></i>
            </a>
        </div>
    );
};

export default DataSection;
