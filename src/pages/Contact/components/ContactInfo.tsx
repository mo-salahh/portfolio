import React from 'react';

interface ContactInfoProps {
    icon: string;
    title: string;
    subtitle: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, subtitle }) => {
    return (
        <div className="contact__information">
            <i className={`uil ${icon} contact__icon`}></i>
            <div>
                <h3 className="contact__title">{title}</h3>
                <span className="contact__subtitle">{subtitle}</span>
            </div>
        </div>
    );
};

export default ContactInfo;
