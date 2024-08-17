import React from "react";

interface FooterLinksProps {
  links: { href: string; label: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => (
  <ul className="footer__links">
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href} className="footer__link">
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

export default FooterLinks;
