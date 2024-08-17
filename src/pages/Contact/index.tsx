import React from 'react';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';


const Contact: React.FC = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <ContactInfo icon="uil-phone-alt" title="Call me" subtitle="+90 (501) 031 34 20" />
                    <ContactInfo icon="uil-envelope" title="E-mail" subtitle="muhammed-salah@outlook.com" />
                    <ContactInfo icon="uil-location-point" title="Location" subtitle="Istanbul, Turkey" />
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
