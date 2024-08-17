import React from "react";

interface FooterTitleProps {
  name: string;
  title: string;
}

const FooterTitle: React.FC<FooterTitleProps> = ({ name, title }) => (
  <div>
    <h1 className="footer__title">{name}</h1>
    <span className="footer__subtitle">{title}</span>
  </div>
);

export default FooterTitle;
