import React from 'react';
import ServicesSection from './components/ServicesSection';
import { servicesData } from '../../data';

const Services: React.FC = () => {
    return (
        <div>
            <ServicesSection services={servicesData} />
        </div>
    );
};

export default Services;
