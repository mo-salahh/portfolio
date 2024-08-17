import React from 'react';
import HomeContent from './components/HomeContent';
import { homeData } from '../../data';


const Home: React.FC = () => {
    return (
        <div>
            <HomeContent
                socialLinks={homeData.socialLinks}
                imageSrc={homeData.imageSrc}
                dataSections={homeData.dataSections}
                scrollTarget={homeData.scrollTarget}
            />
        </div>
    );
};

export default Home;
