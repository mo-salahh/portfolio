import React from 'react';
import { AboutData } from '../types';

const AboutContent: React.FC<AboutData> = ({ imageSrc, description, infoItems, cvLink }) => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={imageSrc} alt="Frontend Development" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        {description}
                    </p>

                    <div className="about__info">
                        {infoItems.map((item, index) => (
                            <div key={index}>
                                <span className="about__info-title">{item.title}</span>
                                <span className="about__info-name">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="about__buttons">
                        <a download href={cvLink} className="button button--flex">
                            Download CV <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
