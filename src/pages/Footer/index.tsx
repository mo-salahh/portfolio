import React from "react";
import FooterContent from "./components/FooterContent";
import { footerData } from "../../data";

const Footer: React.FC = () => {
  return (
    <div>
      <FooterContent {...footerData} />
    </div>
  );
};

export default Footer;
