import React from 'react';

interface ContactInputProps {
    label: string;
    id: string;
    type?: string;
    isTextArea?: boolean;
    rows?: number;
}

const ContactInput: React.FC<ContactInputProps> = ({ label, id, type = 'text', isTextArea = false, rows = 7 }) => {
    return (
        <div className="contact__content">
            <label htmlFor={id} className="contact__label">{label}</label>
            {isTextArea ? (
                <textarea id={id} rows={rows} className="contact__input"></textarea>
            ) : (
                <input type={type} id={id} className="contact__input" />
            )}
        </div>
    );
};

export default ContactInput;
