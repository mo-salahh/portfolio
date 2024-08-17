import React from 'react';
import AboutContent from './components/AboutContent';
import { aboutData } from '../../data';

const About: React.FC = () => {
    return (
        <div>
            <AboutContent
                imageSrc={aboutData.imageSrc}
                description={aboutData.description}
                infoItems={aboutData.infoItems}
                cvLink={aboutData.cvLink}
            />
        </div>
    );
};

export default About;
