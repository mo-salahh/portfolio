import React from 'react';
import ServicesList from './ServicesList';
import { ServicesData } from '../types';

interface ServicesSectionProps {
    services: ServicesData[];
}


const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>
            <ServicesList services={services} />
        </section>
    );
};

export default ServicesSection;
