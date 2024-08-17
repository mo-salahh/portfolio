import React from 'react';

interface SocialLink {
    href: string;
    iconClass: string;
}

interface SocialLinksProps {
    links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
    return (
        <div className="home__social">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home__social-icon"
                >
                    <i className={link.iconClass}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
