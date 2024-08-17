import React from 'react';
import ContactInput from './ContactInput';

const ContactForm: React.FC = () => {
    return (
        <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
                <ContactInput label="Name" id="name" />
                <ContactInput label="Email" id="email" type="email" />
            </div>
            <ContactInput label="Project" id="project" />
            <ContactInput label="Message" id="message" isTextArea />
            <div>
                <a href="#" className="button button--flex">
                    Send Message
                    <i className="uil uil-message button__icon"></i>
                </a>
            </div>
        </form>
    );
};

export default ContactForm;
