import React from 'react';

interface ServiceModalProps {
    title: string;
    description: string[];
    onCloseModal: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ title, description, onCloseModal }) => {
    return (
        <div className="services__modal">
            <div className="services__modal-content">
                <h4 className="services__modal-title">{title}</h4>
                <i
                    className="uil uil-times services__modal-close"
                    onClick={onCloseModal}
                ></i>

                <ul className="services__modal-services grid">
                    {description.map((desc, index) => (
                        <li key={index} className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p>{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceModal;
