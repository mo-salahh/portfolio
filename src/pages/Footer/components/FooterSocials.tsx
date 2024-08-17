import React from "react";

interface FooterSocialsProps {
  socials: { href: string; iconClass: string }[];
}

const FooterSocials: React.FC<FooterSocialsProps> = ({ socials }) => (
  <div className="footer__socials">
    {socials.map((social, index) => (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="footer__social"
      >
        <i className={social.iconClass}></i>
      </a>
    ))}
  </div>
);

export default FooterSocials;
