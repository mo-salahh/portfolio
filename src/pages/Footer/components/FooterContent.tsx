import React from "react";

import { FooterType } from "../types";
import FooterTitle from "./FooterTitle";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

const FooterContent: React.FC<FooterType> = ({
  name,
  title,
  links,
  socials,
}) => (
  <footer className="footer">
    <div className="footer__bg">
      <div className="footer__container container grid">
        <FooterTitle name={name} title={title} />
        <FooterLinks links={links} />
        <FooterSocials socials={socials} />
      </div>
      <p className="footer__copyright">
        Copyright &#169; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterContent;
