import React from 'react';

interface ServiceItemProps {
    id: string;
    icon: string;
    title: string;
    onOpenModal: (id: string) => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ id, icon, title, onOpenModal }) => {
    return (
        <div className="services__content">
            <div>
                <i className={`services__icon ${icon}`}></i>
                <h3 className="services__title">{title}</h3>
            </div>
            <span
                className="button button--flex button--small button--link services__button"
                onClick={() => onOpenModal(id)}
            >
                View more
                <div className="button__icon">
                    <i className="uil uil-arrow-right"></i>
                </div>
            </span>
        </div>
    );
};

export default ServiceItem;
