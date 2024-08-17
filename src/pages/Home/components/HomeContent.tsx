import React from 'react';
import SocialLinks from './SocialLinks';
import BlobImage from './BlobImage';
import DataSection from './DataSection';
import ScrollSection from './ScrollSection';
import { HomeData } from '../types';

const HomeContent: React.FC<HomeData> = ({ socialLinks, imageSrc, dataSections, scrollTarget }) => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <SocialLinks links={socialLinks} />
                    <BlobImage imageSrc={imageSrc} />
                    <DataSection {...dataSections}/>
                </div>
                <ScrollSection target={scrollTarget} />
            </div>
        </section>
    );
};

export default HomeContent;
