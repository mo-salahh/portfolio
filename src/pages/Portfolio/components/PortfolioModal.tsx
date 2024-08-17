import React from 'react';

interface PortfolioModalProps {
    title: string;
    modalContent: string[];
    onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ title, modalContent, onClose }) => {
    return (
        <div className="portfolio__modal">
            <div className="portfolio__modal-content">
                <h4 className="portfolio__modal-title">{title}</h4>
                <i className="uil uil-times portfolio__modal-close" onClick={onClose}></i>
                <ul className="portfolio__modal-portfolio grid">
                    {modalContent.map((content, index) => (
                        <li key={index} className="portfolio__modal-description">
                            <i className="uil uil-check-circle portfolio__modal-icon"></i>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PortfolioModal;
