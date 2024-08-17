import React, { useState } from 'react';
import ServiceItem from './ServiceItem';
import ServiceModal from './ServiceModal';
import { ServicesData } from '../types';

interface ServicesListProps {
    services: ServicesData[];
}

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const handleModalOpen = (id: string) => {
        setActiveModal(id);        
    };

    const handleModalClose = () => {
        setActiveModal(null);
    };

    return (
        <div className="services__container container grid">
            {services.map(service => (
                <React.Fragment key={service.id}>
                    <ServiceItem
                        id={service.id}
                        icon={service.icon}
                        title={service.title}
                        onOpenModal={handleModalOpen}
                    />
                    {activeModal === service.id && (
                        <ServiceModal
                            title={service.title}
                            description={service.description}
                            onCloseModal={handleModalClose}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ServicesList;
